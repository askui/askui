import { CredentialArgs } from '../utils/http/credentials';
import { AnnotationLevel } from './annotation-level';

/**
 * @param uiControllerUrl The adress of the askui UI Controller server.
 * @param inferenceClientUrl Address of the askui Inference server.
 * @param annotationLevel Usage of annotate command after execution of test steps.
 * You have three options: `DISABLED`, `ON_FAILURE`, `ALL`.
 * @param credentials We need to provide credentials for
 * the authentication of the askui Inferrence Server.
 */
export interface ClientArgs {
  readonly uiControllerUrl?: string,
  readonly inferenceServerUrl?: string,
  readonly annotationLevel?: AnnotationLevel,
  readonly credentials?: CredentialArgs
}

export interface ClientArgsWithDefaults extends ClientArgs {
  readonly uiControllerUrl: string,
  readonly inferenceServerUrl: string,
  readonly annotationLevel: AnnotationLevel
}
