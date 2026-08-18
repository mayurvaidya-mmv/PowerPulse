import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteTransitGatewayMeteringPolicyRequest,
  DeleteTransitGatewayMeteringPolicyResult,
} from "../models/models_3";
export { __MetadataBearer };
export { $Command };
export interface DeleteTransitGatewayMeteringPolicyCommandInput
  extends DeleteTransitGatewayMeteringPolicyRequest {}
export interface DeleteTransitGatewayMeteringPolicyCommandOutput
  extends DeleteTransitGatewayMeteringPolicyResult,
    __MetadataBearer {}
declare const DeleteTransitGatewayMeteringPolicyCommand_base: {
  new (
    input: DeleteTransitGatewayMeteringPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteTransitGatewayMeteringPolicyCommandInput,
    DeleteTransitGatewayMeteringPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteTransitGatewayMeteringPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteTransitGatewayMeteringPolicyCommandInput,
    DeleteTransitGatewayMeteringPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteTransitGatewayMeteringPolicyCommand extends DeleteTransitGatewayMeteringPolicyCommand_base {
  protected static __types: {
    api: {
      input: DeleteTransitGatewayMeteringPolicyRequest;
      output: DeleteTransitGatewayMeteringPolicyResult;
    };
    sdk: {
      input: DeleteTransitGatewayMeteringPolicyCommandInput;
      output: DeleteTransitGatewayMeteringPolicyCommandOutput;
    };
  };
}
