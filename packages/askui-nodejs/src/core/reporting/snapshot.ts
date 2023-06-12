import { DetectedElement } from '../model/annotation-result/detected-element';

export interface Snapshot {
  readonly createdAt: Date;
  readonly screenshot?: string | undefined;
  readonly detectedElements?: Readonly<Readonly<DetectedElement>>[] | undefined;
}
