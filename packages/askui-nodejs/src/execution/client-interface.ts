import { CredentialArgs } from '../utils/http/credentials';
import { AnnotationLevel } from './annotation-level';

export interface ClientArgs {
  readonly askuiUiControllerUrl?: string,
  readonly inferenceApiApiUrl?: string,
  readonly annotationLevel?: AnnotationLevel,
  readonly credentials?: CredentialArgs
}

export interface ClientArgsWithDefaults extends ClientArgs {
  readonly askuiUiControllerUrl: string,
  readonly inferenceApiApiUrl: string,
  readonly annotationLevel: AnnotationLevel
}
