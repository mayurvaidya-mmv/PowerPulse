import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteRouteServerPeerRequest,
  DeleteRouteServerPeerResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteRouteServerPeerCommandInput
  extends DeleteRouteServerPeerRequest {}
export interface DeleteRouteServerPeerCommandOutput
  extends DeleteRouteServerPeerResult,
    __MetadataBearer {}
declare const DeleteRouteServerPeerCommand_base: {
  new (
    input: DeleteRouteServerPeerCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteRouteServerPeerCommandInput,
    DeleteRouteServerPeerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteRouteServerPeerCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteRouteServerPeerCommandInput,
    DeleteRouteServerPeerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteRouteServerPeerCommand extends DeleteRouteServerPeerCommand_base {
  protected static __types: {
    api: {
      input: DeleteRouteServerPeerRequest;
      output: DeleteRouteServerPeerResult;
    };
    sdk: {
      input: DeleteRouteServerPeerCommandInput;
      output: DeleteRouteServerPeerCommandOutput;
    };
  };
}
