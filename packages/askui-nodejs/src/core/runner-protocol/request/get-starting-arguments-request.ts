import { RunnerProtocolRequest } from './runner-protocol-request';

export class GetStartingArgumentsRequest implements RunnerProtocolRequest {
  static msgName = 'GET_STARTING_ARGUMENTS_REQUEST';

  msgName: string = GetStartingArgumentsRequest.msgName;
}
