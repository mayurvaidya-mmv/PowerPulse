import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetTransitGatewayMeteringPolicyEntriesRequest,
  GetTransitGatewayMeteringPolicyEntriesResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface GetTransitGatewayMeteringPolicyEntriesCommandInput
  extends GetTransitGatewayMeteringPolicyEntriesRequest {}
export interface GetTransitGatewayMeteringPolicyEntriesCommandOutput
  extends GetTransitGatewayMeteringPolicyEntriesResult,
    __MetadataBearer {}
declare const GetTransitGatewayMeteringPolicyEntriesCommand_base: {
  new (
    input: GetTransitGatewayMeteringPolicyEntriesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetTransitGatewayMeteringPolicyEntriesCommandInput,
    GetTransitGatewayMeteringPolicyEntriesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetTransitGatewayMeteringPolicyEntriesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetTransitGatewayMeteringPolicyEntriesCommandInput,
    GetTransitGatewayMeteringPolicyEntriesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetTransitGatewayMeteringPolicyEntriesCommand extends GetTransitGatewayMeteringPolicyEntriesCommand_base {
  protected static __types: {
    api: {
      input: GetTransitGatewayMeteringPolicyEntriesRequest;
      output: GetTransitGatewayMeteringPolicyEntriesResult;
    };
    sdk: {
      input: GetTransitGatewayMeteringPolicyEntriesCommandInput;
      output: GetTransitGatewayMeteringPolicyEntriesCommandOutput;
    };
  };
}
