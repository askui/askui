import { Snapshot } from './snapshot';
import { Instruction } from './instruction';
import { Reporter } from './reporter';
import { ReporterConfig } from './reporter-config';
import { DefaultStep } from './default-step';
import { logger } from '../../lib/logger';
import { maxSnapshotDetailLevel } from './snapshot-detail-level';

interface ReporterWithPromiseQueue {
  reporter: Reporter;
  promiseQueue: Promise<void>;
}

function buildReportersWithPromiseQueue(
  reporter: Reporter | Reporter[] | undefined,
): ReporterWithPromiseQueue[] {
  if (reporter === undefined) {
    return [];
  }
  if (Array.isArray(reporter)) {
    return reporter.map((r) => ({
      reporter: r,
      promiseQueue: Promise.resolve(),
    }));
  }
  return [
    {
      reporter,
      promiseQueue: Promise.resolve(),
    },
  ];
}

export class StepReporter {
  private _currentStep?: DefaultStep | undefined;

  private reporters: ReporterWithPromiseQueue[];

  readonly config: Required<ReporterConfig>;

  constructor(reporter?: Reporter | Reporter[] | undefined) {
    this.reporters = buildReportersWithPromiseQueue(reporter);
    this.config = {
      withScreenshots: maxSnapshotDetailLevel(
        ...this.reporters.map(
          (r) => r.reporter.config?.withScreenshots ?? 'onFailure',
        ),
      ),
      withDetectedElements: maxSnapshotDetailLevel(
        ...this.reporters.map(
          (r) => r.reporter.config?.withDetectedElements ?? 'onFailure',
        ),
      ),
    };
  }

  flush(): Promise<void> {
    return Promise.all(
      this.reporters.map((reporter) => reporter.promiseQueue),
    ).then(() => {});
  }

  get currentStep(): DefaultStep | undefined {
    return this._currentStep;
  }

  resetStep(instruction: Instruction): void {
    this._currentStep = new DefaultStep(instruction);
  }

  private enqueueReporterCalls(
    type: 'onStepBegin' | 'onStepRetry' | 'onStepEnd',
    step: DefaultStep,
  ): void {
    this.reporters = this.reporters.map((reporter) => ({
      ...reporter,
      promiseQueue: reporter.promiseQueue
        .then(() => reporter.reporter[type]?.(step) ?? Promise.resolve())
        .catch((error) => {
          logger.error(error);
          return Promise.resolve();
        }),
    }));
  }

  async onStepBegin(snapshot: Snapshot): Promise<void> {
    if (this._currentStep === undefined) {
      logger.error('Cannot begin step if step is undefined.');
      return Promise.resolve();
    }

    if (this._currentStep.status !== 'pending') {
      logger.error('Cannot begin step that is not pending.');
      return Promise.resolve();
    }

    this._currentStep = this._currentStep.onBegin(snapshot);
    this.enqueueReporterCalls('onStepBegin', this._currentStep);
    return Promise.resolve();
  }

  async onStepRetry(snapshot: Snapshot, error: Error): Promise<void> {
    if (this._currentStep === undefined) {
      logger.error('Cannot retry step if step is undefined.');
      return Promise.resolve();
    }

    if (this._currentStep.status !== 'running') {
      logger.error('Cannot retry step that has not been running.');
      return Promise.resolve();
    }

    this._currentStep = this._currentStep.onRetry(snapshot, error);
    this.enqueueReporterCalls('onStepRetry', this._currentStep);
    return Promise.resolve();
  }

  async onStepEnd(snapshot: Snapshot, error?: Error): Promise<void> {
    if (this._currentStep === undefined) {
      logger.error('Cannot end step if step is undefined.');
      return Promise.resolve();
    }

    if (this._currentStep.status !== 'running') {
      logger.error('Cannot end step that has not been running.');
      return Promise.resolve();
    }

    this._currentStep = this._currentStep.onEnd(snapshot, error);
    this.enqueueReporterCalls('onStepEnd', this._currentStep);
    return Promise.resolve();
  }
}
