export interface ClientArgs {
  readonly controlServerUrl?: string,
  readonly controlYourUiApi?: string,
  readonly annotationLevel?: 'disabled' | 'onFailure' | 'all'
}

export interface ClientArgsWithDefaults extends ClientArgs {
  readonly controlServerUrl: string,
  readonly controlYourUiApi: string,
  readonly annotationLevel: 'disabled' | 'onFailure' | 'all'
}
