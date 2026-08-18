import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateRouteServerEndpointRequest,
  CreateRouteServerEndpointResult,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface CreateRouteServerEndpointCommandInput
  extends CreateRouteServerEndpointRequest {}
export interface CreateRouteServerEndpointCommandOutput
  extends CreateRouteServerEndpointResult,
    __MetadataBearer {}
declare const CreateRouteServerEndpointCommand_base: {
  new (
    input: CreateRouteServerEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateRouteServerEndpointCommandInput,
    CreateRouteServerEndpointCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateRouteServerEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateRouteServerEndpointCommandInput,
    CreateRouteServerEndpointCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateRouteServerEndpointCommand extends CreateRouteServerEndpointCommand_base {
  protected static __types: {
    api: {
      input: CreateRouteServerEndpointRequest;
      output: CreateRouteServerEndpointResult;
    };
    sdk: {
      input: CreateRouteServerEndpointCommandInput;
      output: CreateRouteServerEndpointCommandOutput;
    };
  };
}
