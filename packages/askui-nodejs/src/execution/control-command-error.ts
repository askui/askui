export class ControlCommandError extends Error {
  // Allows jest to diff between this error (test failed) and others (test erroneous)
  matcherResult: {
    pass: boolean;
    message: string;
  };

  constructor(message: string) {
    super(message);
    this.name = 'ControlCommandError';
    this.matcherResult = {
      pass: false,
      message,
    };
  }
}
