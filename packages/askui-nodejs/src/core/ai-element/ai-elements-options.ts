/**
 * Options for configuring how AI elements are collected.
 *
 * @interface AIElementOptions
 *
 * @property {string[]} sourceDirectories - List of source directories to search for AI elements.
 *  These directories will be checked for the presence of AI element files.
 *
 * @property {'Warn' | 'Error' | 'Ignore'} notFoundAction - Action to take when
 *  one or more source directories are not found.
 *      - `'Warn'` → Logs a warning if a directory is missing.
 *      - `'Error'` → Throws an error if a directory is missing.
 *      - `'Ignore'` → Skips missing directories without logging anything.
 *  This action is triggered when specified directories do not exist,
 *      not when AI elements within those directories are missing.
 */
export interface AIElementOptions {
  sourceDirectories: string[]
  notFoundAction: 'Warn' | 'Error' | 'Ignore'
}
