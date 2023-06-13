/**
 * - `passed`: the step passed
 * - `failed`: the step failed because of a failed (implicit/explicit) assertion,
 *  e.g., an element could not be found
 * - `pending`: the step is waiting for a previous step to pass
 * - `running`: the step is currently running (including retries)
 * - `skipped`: the step was skipped, e.g., because a previous step failed or
 *  because workflow was skipped
 * - `erroneous`: the step could not be run because of a runtime error,
 *  e.g., the user has no usage left, response of inference backend cannot be processed,
 *  e.g., because lib version is outdated, etc. (currently not supported, everything "failed")
 */
export type StepStatus = 'passed' | 'failed' | 'pending' | 'running' | 'erroneous';
