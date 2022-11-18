import { AnnotationLevel } from './annotation-level';
import { CredentialArgs } from './credentials-args';
import { ProxyAgentArgs } from '../shared/proxy-agent-args';

/**
 * Configuration options for the askui UI Control Client
 *
 * @param {string} uiControllerUrl - Default: http://127.0.0.1:6769
 * The adress of the askui UI Controller server.
 * @param {string} inferenceClientUrl - Default: https://inference.askui.com`
 * Address of the askui Inference server.
 * @param {AnnotationLevel} annotationLevel - Default: AnnotationLevel.DISABLED
 * Usage of annotate command
 * after execution of test steps.
 * You have three options: `DISABLED`, `ON_FAILURE`, `ALL`.
 * @param {CredentialArgs} credentials - We need to provide credentials for
 * the authentication of the askui Inference Server.
 * You have three options: `DISABLED`, `ON_FAILURE`, `ALL`.
 * @param {ProxyAgentArgs} proxyAgents - To configure the proxy agents for http(s) requests.
 */
export interface ClientArgs {
  readonly uiControllerUrl?: string,
  readonly inferenceServerUrl?: string,
  readonly annotationLevel?: AnnotationLevel,
  readonly credentials?: CredentialArgs,
  readonly proxyAgents?: ProxyAgentArgs
}

export interface ClientArgsWithDefaults extends ClientArgs {
  readonly uiControllerUrl: string,
  readonly inferenceServerUrl: string,
  readonly annotationLevel: AnnotationLevel
}
