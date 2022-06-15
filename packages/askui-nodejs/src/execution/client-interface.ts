import { CredentialArgs } from '../utils/http/credentials';
import { AnnotationLevel } from './annotation-level';

/**
 * @param controlServerUrl The adress of the askui UI Controller server.
 * @param controlYourUiApi Address of the askui Inference server.
 * @param annotationLevel Usage of annotate command after execution of test steps.
 * You have three options: `DISABLED`, `ON_FAILURE`, `ALL`.
 * @param credentials We need to provide this credentials for
 * the authentication of askui inferrence Server-
 */
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
