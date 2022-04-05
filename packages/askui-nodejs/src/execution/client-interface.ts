import { AnnotationLevel } from './annotation-level';

export interface ClientArgs {
  readonly controlServerUrl?: string,
  readonly controlYourUiApi?: string,
  readonly annotationLevel?: AnnotationLevel
}

export interface ClientArgsWithDefaults extends ClientArgs {
  readonly controlServerUrl: string,
  readonly controlYourUiApi: string,
  readonly annotationLevel: AnnotationLevel
}
