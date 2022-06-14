import { CredentialArgs } from '../utils/http/credentials';
import { AnnotationLevel } from './annotation-level';

export interface ClientArgs {
  // The adress of the askui UI Controller server.
  readonly controlServerUrl?: string,
  // Address of the askui Inference server.
  readonly controlYourUiApi?: string,
  /* Usage of annotate command after execution of test steps.
  You have three options: `DISABLED`, `ON_FAILURE`, `ALL`. */
  readonly annotationLevel?: AnnotationLevel,
  // Credentials for http client.
  readonly credentials?: CredentialArgs
}

export interface ClientArgsWithDefaults extends ClientArgs {
  readonly controlServerUrl: string,
  readonly controlYourUiApi: string,
  readonly annotationLevel: AnnotationLevel
}
