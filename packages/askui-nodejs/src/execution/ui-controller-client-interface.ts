import { AnnotationLevel } from './annotation-level';
import { CredentialArgs } from './credentials-args';
import { ProxyAgentArgs } from '../shared/proxy-agent-args';

/**
 * Configuration options for the askui UI Control Client
 *
 * @param {string} uiControllerUrl - Default: http://127.0.0.1:6769
 * The adress of the askui UI Controller server.
 * @param {(number | undefined)} resize - Default: undefined
 * The resizing will be skipped if it's undefined.
 * The side length of the target image to resize to in px.
 * Your screenshot image will be resized with the original aspect ratio,
 *  and the lengths image side will be equal to this number.
 * This can be used to reduce the inference time by reducing
 *  the request size in case of a bad internet connection.
 * But it can cause a decrease in the prediction quality.
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
  readonly resize?: number
}

export interface ClientArgsWithDefaults extends ClientArgs {
  readonly uiControllerUrl: string,
  readonly inferenceServerUrl: string,
  readonly annotationLevel: AnnotationLevel
}
