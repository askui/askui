import { Step } from './step';
import { ReporterConfig } from './reporter-config';

/**
 * Can be used to report on a step run.
 *
 * The reporter is an interface (instead of a class) so that the it may be implemented by a class
 * that already extends another class, e.g., the reporter of a test framework.
 */
export interface Reporter {
  config?: ReporterConfig;
  onStepBegin?(step: Step): Promise<void>;
  onStepRetry?(step: Step): Promise<void>;
  onStepEnd?(step: Step): Promise<void>;
}
