export class InstallationTimestampCreateError extends Error {
  constructor(err: NodeJS.ErrnoException) {
    super(`Installation timestamp could not be created. \n${err.message}`);
  }
}
