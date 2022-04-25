import { CredentialArgs } from '../utils/http/credentials';
import { AnnotationLevel } from './annotation-level';

export interface ClientArgs {
  readonly controlServerUrl?: string,
  readonly controlYourUiApi?: string,
  readonly annotationLevel?: AnnotationLevel,
  readonly credentials?: CredentialArgs
}

export interface ClientArgsWithDefaults extends ClientArgs {
  readonly controlServerUrl: string,
  readonly controlYourUiApi: string,
  readonly annotationLevel: AnnotationLevel
}
