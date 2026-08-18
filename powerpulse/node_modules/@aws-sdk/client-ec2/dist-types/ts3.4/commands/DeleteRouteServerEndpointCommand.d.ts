import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteRouteServerEndpointRequest,
  DeleteRouteServerEndpointResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteRouteServerEndpointCommandInput
  extends DeleteRouteServerEndpointRequest {}
export interface DeleteRouteServerEndpointCommandOutput
  extends DeleteRouteServerEndpointResult,
    __MetadataBearer {}
declare const DeleteRouteServerEndpointCommand_base: {
  new (
    input: DeleteRouteServerEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteRouteServerEndpointCommandInput,
    DeleteRouteServerEndpointCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteRouteServerEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteRouteServerEndpointCommandInput,
    DeleteRouteServerEndpointCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteRouteServerEndpointCommand extends DeleteRouteServerEndpointCommand_base {
  protected static __types: {
    api: {
      input: DeleteRouteServerEndpointRequest;
      output: DeleteRouteServerEndpointResult;
    };
    sdk: {
      input: DeleteRouteServerEndpointCommandInput;
      output: DeleteRouteServerEndpointCommandOutput;
    };
  };
}
