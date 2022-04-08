export class ControlCommandError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ControlCommandError';
  }
}
