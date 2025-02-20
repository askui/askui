/**
 * Options for configuring how AI elements are collected.
 *
 * @interface AIElementArgs
 *
 * @property {string[]} additionalLocations - Additional directories to search for AI elements.
 *  These directories will be checked for the presence of AI element files.
 *
 * @property {'Warn' | 'Error' | 'Ignore'} onLocationNotExist - Action to take when
 *  one or more specified directories do not exist.
 *      - `'Warn'` → Logs a warning if a directory is missing.
 *      - `'Error'` → Throws an error if a directory is missing.
 *      - `'Ignore'` → Skips missing directories without logging anything.
 *  This action is triggered when specified directories do not exist,
 *      not when AI elements within those directories are missing.
 */
export interface AIElementArgs {
  additionalLocations: string[]
  onLocationNotExist?: 'Warn' | 'Error' | 'Ignore'
}
