import { CredentialArgs } from '../utils/http/credentials';
import { AnnotationLevel } from './annotation-level';

export interface ClientArgs {
  readonly uiControlServerUrl?: string,
  readonly inferenceServerUrl?: string,
  readonly annotationLevel?: AnnotationLevel,
  readonly credentials?: CredentialArgs
}

export interface ClientArgsWithDefaults extends ClientArgs {
  readonly uiControlServerUrl: string,
  readonly inferenceServerUrl: string,
  readonly annotationLevel: AnnotationLevel
}
