import { DetectedElement } from '../../model/annotation-result/detected-element';
import { RunnerProtocolRequest } from './runner-protocol-request';

export class InteractiveAnnotationRequest implements RunnerProtocolRequest {
  static msgName = 'START_INTERACTIVE_ANNOTATION_REQUEST';

  boundingBoxes: DetectedElement[];

  imageString: string;

  msgName: string = InteractiveAnnotationRequest.msgName;

  constructor(boundingBoxes: DetectedElement[], imageString: string) {
    this.boundingBoxes = boundingBoxes;
    this.imageString = imageString;
  }
}
