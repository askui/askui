import path from 'path';

export function getPathToNodeModulesRoot(): string {
  return path.join(__dirname, '..', '..');
}
