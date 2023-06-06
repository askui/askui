import { HttpClientGot } from '../utils/http/http-client-got';
import { UiControllerClient } from './ui-controller-client';
import { InferenceClient } from './inference-client';
import {
  ClientArgs,
  ClientArgsWithDefaults,
} from './ui-controller-client-interface';
import { envCredentials } from './read-environment-credentials';
import { Analytics } from '../utils/analytics';
import { envProxyAgents } from '../utils/proxy/proxy-builder';
import { AnnotationLevel } from './annotation-level';
import { ExecutionRuntime } from './execution-runtime';

export class UiControlClientDependencyBuilder {
  private static async buildHttpClient(
    clientArgs: ClientArgsWithDefaults,
  ): Promise<HttpClientGot> {
    const analytics = new Analytics();
    const analyticsHeaders = await analytics.getAnalyticsHeaders();
    const analyticsCookies = await analytics.getAnalyticsCookies();
    return new HttpClientGot(
      clientArgs.credentials?.token,
      analyticsHeaders,
      analyticsCookies,
      clientArgs.proxyAgents,
    );
  }

  private static async buildInferenceClient(
    clientArgs: ClientArgsWithDefaults,
  ): Promise<InferenceClient> {
    const httpClient = await UiControlClientDependencyBuilder.buildHttpClient(
      clientArgs,
    );
    return new InferenceClient(
      clientArgs.inferenceServerUrl,
      httpClient,
      clientArgs.resize,
      clientArgs.credentials?.workspaceId,
      clientArgs.modelComposition,
    );
  }

  private static buildUiControllerClient(
    clientArgs: ClientArgsWithDefaults,
  ): UiControllerClient {
    return new UiControllerClient(clientArgs.uiControllerUrl);
  }

  static async build(
    clientArgs: ClientArgsWithDefaults,
  ): Promise<{ executionRuntime: ExecutionRuntime }> {
    const uiControllerClient = UiControlClientDependencyBuilder.buildUiControllerClient(clientArgs);
    const inferenceClient = await UiControlClientDependencyBuilder.buildInferenceClient(clientArgs);
    return {
      executionRuntime: new ExecutionRuntime(
        uiControllerClient,
        inferenceClient,
      ),
    };
  }

  static async getClientArgsWithDefaults(
    clientArgs: ClientArgs,
  ): Promise<ClientArgsWithDefaults> {
    return {
      uiControllerUrl: 'http://127.0.0.1:6769',
      inferenceServerUrl: 'https://inference.askui.com',
      annotationLevel: AnnotationLevel.DISABLED,
      credentials: envCredentials(),
      proxyAgents: await envProxyAgents(),
      ...clientArgs,
    };
  }
}
