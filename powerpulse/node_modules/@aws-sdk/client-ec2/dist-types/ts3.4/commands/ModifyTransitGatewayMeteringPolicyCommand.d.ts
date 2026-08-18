import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  ModifyTransitGatewayMeteringPolicyRequest,
  ModifyTransitGatewayMeteringPolicyResult,
} from "../models/models_7";
export { __MetadataBearer };
export { $Command };
export interface ModifyTransitGatewayMeteringPolicyCommandInput
  extends ModifyTransitGatewayMeteringPolicyRequest {}
export interface ModifyTransitGatewayMeteringPolicyCommandOutput
  extends ModifyTransitGatewayMeteringPolicyResult,
    __MetadataBearer {}
declare const ModifyTransitGatewayMeteringPolicyCommand_base: {
  new (
    input: ModifyTransitGatewayMeteringPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyTransitGatewayMeteringPolicyCommandInput,
    ModifyTransitGatewayMeteringPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ModifyTransitGatewayMeteringPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyTransitGatewayMeteringPolicyCommandInput,
    ModifyTransitGatewayMeteringPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ModifyTransitGatewayMeteringPolicyCommand extends ModifyTransitGatewayMeteringPolicyCommand_base {
  protected static __types: {
    api: {
      input: ModifyTransitGatewayMeteringPolicyRequest;
      output: ModifyTransitGatewayMeteringPolicyResult;
    };
    sdk: {
      input: ModifyTransitGatewayMeteringPolicyCommandInput;
      output: ModifyTransitGatewayMeteringPolicyCommandOutput;
    };
  };
}
