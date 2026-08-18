import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateTransitGatewayMeteringPolicyRequest,
  CreateTransitGatewayMeteringPolicyResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface CreateTransitGatewayMeteringPolicyCommandInput
  extends CreateTransitGatewayMeteringPolicyRequest {}
export interface CreateTransitGatewayMeteringPolicyCommandOutput
  extends CreateTransitGatewayMeteringPolicyResult,
    __MetadataBearer {}
declare const CreateTransitGatewayMeteringPolicyCommand_base: {
  new (
    input: CreateTransitGatewayMeteringPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateTransitGatewayMeteringPolicyCommandInput,
    CreateTransitGatewayMeteringPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateTransitGatewayMeteringPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateTransitGatewayMeteringPolicyCommandInput,
    CreateTransitGatewayMeteringPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateTransitGatewayMeteringPolicyCommand extends CreateTransitGatewayMeteringPolicyCommand_base {
  protected static __types: {
    api: {
      input: CreateTransitGatewayMeteringPolicyRequest;
      output: CreateTransitGatewayMeteringPolicyResult;
    };
    sdk: {
      input: CreateTransitGatewayMeteringPolicyCommandInput;
      output: CreateTransitGatewayMeteringPolicyCommandOutput;
    };
  };
}
