import { StepStatus } from './step-status';
import { Snapshot } from './snapshot';

export interface StepRun {
  readonly status: StepStatus;
  readonly begin?: Snapshot | undefined;
  readonly end?: Snapshot | undefined;
  readonly duration?: number | undefined;
  readonly error?: Error | undefined;
}
