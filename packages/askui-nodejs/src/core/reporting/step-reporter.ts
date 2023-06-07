import { Snapshot } from './snapshot';
import { Instruction } from './instruction';
import { Reporter } from './reporter';
import { ReporterConfig } from './reporter-config';
import { DefaultStep } from './default-step';

export class StepReporter {
  currentStep?: DefaultStep | undefined;

  constructor(private reporter: Required<Reporter> & { config: Required<ReporterConfig> }) {}

  get config(): Required<ReporterConfig> {
    return this.reporter.config;
  }

  resetStep(instruction: Instruction): void {
    this.currentStep = new DefaultStep(instruction);
  }

  async onStepBegin(snapshot: Snapshot): Promise<void> {
    if (this.currentStep === undefined) {
      throw new Error('Cannot begin step if step is undefined.');
    }

    if (this.currentStep.status !== 'pending') {
      throw new Error('Cannot begin step that is not pending.');
    }

    this.currentStep.onBegin(snapshot);
    await this.reporter.onStepBegin?.(this.currentStep);
  }

  async onStepRetry(snapshot: Snapshot, error: Error): Promise<void> {
    if (this.currentStep === undefined) {
      throw new Error('Cannot retry step if step is undefined.');
    }

    if (this.currentStep.status !== 'running') {
      throw new Error('Cannot retry step that has not been running.');
    }

    this.currentStep.onRetry(snapshot, error);
    await this.reporter.onStepRetry?.(this.currentStep);
  }

  async onStepEnd(snapshot: Snapshot, error?: Error): Promise<void> {
    if (this.currentStep === undefined) {
      throw new Error('Cannot end step if step is undefined.');
    }

    if (this.currentStep.status !== 'running') {
      throw new Error('Cannot end step that has not been running.');
    }

    this.currentStep.onEnd(snapshot, error);
    await this.reporter.onStepEnd?.(this.currentStep);
  }
}
