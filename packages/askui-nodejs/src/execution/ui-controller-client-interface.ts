import { CredentialArgs } from '../utils/http/credentials';
import { AnnotationLevel } from './annotation-level';

/**
 * Provide configuration options for the askui UI Control Client
 *
 * @param {string} uiControllerUrl - The adress of the askui UI Controller server.
 * @param {string} inferenceClientUrl - Address of the askui Inference server.
 * @param {AnnotationLevel} annotationLevel - Usage of annotate command
 * after execution of test steps.
 * You have three options: `DISABLED`, `ON_FAILURE`, `ALL`.
 * @param {CredentialArgs} credentials - We need to provide credentials for
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
