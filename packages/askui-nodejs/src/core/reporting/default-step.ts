import { ControlCommandError } from '../../execution/control-command-error';
import { Instruction } from './instruction';
import { Snapshot } from './snapshot';
import { Step } from './step';
import { StepRun } from './step-run';
import { StepStatus } from './step-status';
import { StepStatusEnd } from './step-status-end';

export class DefaultStep implements Step {
  instruction: Instruction;

  runs: Readonly<StepRun[]>;

  constructor(instruction: Instruction) {
    this.instruction = instruction;
    this.runs = [];
  }

  get status(): StepStatus {
    return this.lastRun?.status ?? 'pending';
  }

  get begin(): Snapshot | undefined {
    return this.firstRun?.begin;
  }

  get end(): Snapshot | undefined {
    return this.lastRun?.end;
  }

  get error(): Error | undefined {
    return this.lastRun?.error;
  }

  get retries(): StepRun[] {
    return this.runs?.slice(1) ?? [];
  }

  get retryCount(): number {
    return this.retries?.length ?? 0;
  }

  get firstRun(): StepRun | undefined {
    return this.runs?.[0];
  }

  get lastRun(): StepRun | undefined {
    return this.runs?.[this.runs.length - 1];
  }

  get flaky(): boolean {
    return this.retryCount > 0;
  }

  get duration(): number | undefined {
    if (this.begin !== undefined && this.end !== undefined) {
      return this.end.createdAt.getTime() - this.begin.createdAt.getTime();
    }
    return undefined;
  }

  onBegin(snapshot: Snapshot): DefaultStep {
    this.runs = [...this.runs, {
      status: 'running',
      begin: snapshot,
    }];
    return this;
  }

  onRetry(snapshot: Snapshot, error: Error): DefaultStep {
    this.onEnd(snapshot, error);
    this.onBegin(snapshot);
    return this;
  }

  onEnd(snapshot: Snapshot, error?: Error): DefaultStep {
    this.runs = [...this.runs.slice(0, -1), {
      ...this.lastRun,
      status: DefaultStep.determineLastRunStatus(error),
      end: snapshot,
      error,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      duration: snapshot.createdAt.getTime() - this.lastRun!.begin!.createdAt.getTime(),
    }];
    return this;
  }

  private static determineLastRunStatus(error?: Error): StepStatusEnd {
    if (error instanceof ControlCommandError) {
      return 'failed';
    }
    if (error !== undefined) {
      return 'erroneous';
    }
    return 'passed';
  }
}
