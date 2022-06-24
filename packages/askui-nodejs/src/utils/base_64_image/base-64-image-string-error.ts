import { Base64ImageError } from './base-64-image-error';

export class Base64ImageStringError extends Base64ImageError {
  constructor(str: string, prefix: string) {
    super(
      `Can't create Base64Image instance from string:\n${str}\n\n`
        + `String should start with "${prefix}".`,
    );
  }
}
