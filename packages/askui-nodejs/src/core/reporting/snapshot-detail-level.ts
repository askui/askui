export type SnapshotDetailLevel =
    /**
     * Details of snapshot, e.g., screenshot or detected elements, may or may not be available
     *  depending on if they are required by the step. There are not guarantees made.
     */
    'required' |
    /**
     * Details are available when the step fails, e.g., for debugging.
     * Includes everything of required.
     */
    'onFailure' |
    /**
     * Details are available also when the command is started, e.g.,
     *  for detecting why a certain element was interacted with. Includes everything of onFailure.
     */
    'begin' |
    /**
     * Details are available always, e.g.,
     *  before and after a step has been run no matter if it failed or not for debugging.
     */
    'always';

const levelsOrdered: SnapshotDetailLevel[] = ['required', 'onFailure', 'begin', 'always'];
const levelValues = levelsOrdered.reduce((acc, level, index) => ({
  ...acc,
  [level]: index,
}), {} as Record<SnapshotDetailLevel, number>);

export function maxSnapshotDetailLevel(...levels: SnapshotDetailLevel[]): SnapshotDetailLevel {
  return levelsOrdered[Math.max(...levels.map((level) => levelValues[level]))] ?? 'required';
}
