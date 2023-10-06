export class UiControllerClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UiControllerClientError';
  }
}
