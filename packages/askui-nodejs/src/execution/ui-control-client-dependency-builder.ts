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
import {
  DEFAULT_REPORTER, Reporter, ReporterConfig, StepReporter,
} from '../core/reporting';

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
  ): Promise<{ executionRuntime: ExecutionRuntime, stepReporter: StepReporter }> {
    const uiControllerClient = UiControlClientDependencyBuilder.buildUiControllerClient(clientArgs);
    const inferenceClient = await UiControlClientDependencyBuilder.buildInferenceClient(clientArgs);
    const stepReporter = new StepReporter(clientArgs.reporter);
    return {
      executionRuntime: new ExecutionRuntime(
        uiControllerClient,
        inferenceClient,
        stepReporter,
      ),
      stepReporter,
    };
  }

  private static buildReporter(
    reporterArg?: Reporter | undefined,
  ): Required<Reporter> & { config: Required<ReporterConfig> } {
    return {
      config: {
        withScreenshots: reporterArg?.config?.withScreenshots
          ?? DEFAULT_REPORTER.config.withScreenshots,
        withDetectedElements: reporterArg?.config?.withDetectedElements
          ?? DEFAULT_REPORTER.config.withDetectedElements,
      },
      onStepBegin: reporterArg?.onStepBegin?.bind(reporterArg)
        ?? DEFAULT_REPORTER.onStepBegin.bind(DEFAULT_REPORTER),
      onStepRetry: reporterArg?.onStepRetry?.bind(reporterArg)
        ?? DEFAULT_REPORTER.onStepRetry.bind(DEFAULT_REPORTER),
      onStepEnd: reporterArg?.onStepEnd?.bind(reporterArg)
        ?? DEFAULT_REPORTER.onStepEnd.bind(DEFAULT_REPORTER),
    };
  }

  static async getClientArgsWithDefaults(
    clientArgs: ClientArgs,
  ): Promise<ClientArgsWithDefaults> {
    return {
      ...clientArgs,
      uiControllerUrl: clientArgs.uiControllerUrl ?? 'http://127.0.0.1:6769',
      inferenceServerUrl: clientArgs.inferenceServerUrl ?? 'https://inference.askui.com',
      annotationLevel: clientArgs.annotationLevel
        ?? AnnotationLevel.DISABLED,
      credentials: clientArgs.credentials ?? envCredentials(),
      proxyAgents: clientArgs.proxyAgents ?? await envProxyAgents(),
      reporter: UiControlClientDependencyBuilder.buildReporter(clientArgs.reporter),
    };
  }
}
