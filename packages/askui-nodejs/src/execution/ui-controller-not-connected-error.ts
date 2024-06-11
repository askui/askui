import { UiControllerClientError } from './ui-controller-client-error';

export class UiControllerNotConnectedError extends UiControllerClientError {
  constructor() {
    super(
      'UI Controller is not connected. Did you call `UiControlClient.connect()`'
        + ' before trying to interact with the UI Controller / OS?',
    );
    this.name = 'UiControllerNotConnectedError';
  }
}
