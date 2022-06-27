export class InstallationTimestampGetError extends Error {
  constructor(err: NodeJS.ErrnoException) {
    super(`Installation timestamp does not exist. \n${err.message}`);
  }
}
