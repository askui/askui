import { SnapshotDetailLevel } from './snapshot-detail-level';

export interface ReporterConfig {
  /**
     * default: onFailure; makes step run slower
     */
  withScreenshots?: SnapshotDetailLevel;
  /**
     * overrides withScreenshot if higher level of detail as screenshot
     *  is required for detecting elements;
     * incurres additional cost; default: onFailure; makes step run slower
     */
  withDetectedElements?: SnapshotDetailLevel;
}
