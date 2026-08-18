import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  ModifyInstanceConnectEndpointRequest,
  ModifyInstanceConnectEndpointResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface ModifyInstanceConnectEndpointCommandInput
  extends ModifyInstanceConnectEndpointRequest {}
export interface ModifyInstanceConnectEndpointCommandOutput
  extends ModifyInstanceConnectEndpointResult,
    __MetadataBearer {}
declare const ModifyInstanceConnectEndpointCommand_base: {
  new (
    input: ModifyInstanceConnectEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyInstanceConnectEndpointCommandInput,
    ModifyInstanceConnectEndpointCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ModifyInstanceConnectEndpointCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyInstanceConnectEndpointCommandInput,
    ModifyInstanceConnectEndpointCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ModifyInstanceConnectEndpointCommand extends ModifyInstanceConnectEndpointCommand_base {
  protected static __types: {
    api: {
      input: ModifyInstanceConnectEndpointRequest;
      output: ModifyInstanceConnectEndpointResult;
    };
    sdk: {
      input: ModifyInstanceConnectEndpointCommandInput;
      output: ModifyInstanceConnectEndpointCommandOutput;
    };
  };
}
