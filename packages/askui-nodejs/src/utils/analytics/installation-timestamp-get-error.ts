export class InstallationTimestampGetError extends Error {
  constructor(err: NodeJS.ErrnoException) {
    super(`Installation timestamp does not exist. Try reinstalling the lib to create it. \n${err.message}`);
  }
}
