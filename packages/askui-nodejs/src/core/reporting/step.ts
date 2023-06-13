import { StepStatus } from './step-status';
import { Snapshot } from './snapshot';
import { Instruction } from './instruction';
import { StepRun } from './step-run';

export interface Step {
  readonly instruction: Readonly<Instruction>;
  readonly status: StepStatus;
  /**
     * A snapshot of the state of the screen before the step is
     * ran which is nearly immediately after the call to `.exec()`
     */
  readonly begin?: Snapshot | undefined;
  /**
     * The duration of the step in milliseconds based on the start
     * and end time. If the step is still running, this property is undefined.
     */
  readonly duration?: number | undefined;
  /**
     * A snapshot of the state of the screen after the step has been run.
     * If the step is still running or still pending, this property is undefined.
     */
  readonly end?: Snapshot | undefined;
  /**
     * When a step failed or is erroneous, this property contains the error.
     */
  readonly error?: Error | undefined;
  readonly runs: Readonly<StepRun[]>;
  readonly retries: Readonly<StepRun[]>;
  readonly retryCount: number;
  readonly firstRun?: StepRun | undefined;
  readonly lastRun?: StepRun | undefined;
  /**
     * retryCount > 0.
     */
  readonly flaky: boolean;
}
