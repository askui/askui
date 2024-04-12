/**
 * Context object to provide additional information about the context of (test) automation.
 *
 * @property {boolean} isCi - Default: Determined automatically by https://github.com/watson/is-ci;
 *    see https://github.com/watson/ci-info#supported-ci-tools for all supported CI tools.
 *    Can be used for overriding the automatic detection of CI tools, e.g., if not supported by
 *    `is-ci`, so that AskUI can be optimized for the corresponding environment, e.g., adjusting
 *    caching behavior.
 */
export interface Context {
  readonly isCi: boolean;
}
