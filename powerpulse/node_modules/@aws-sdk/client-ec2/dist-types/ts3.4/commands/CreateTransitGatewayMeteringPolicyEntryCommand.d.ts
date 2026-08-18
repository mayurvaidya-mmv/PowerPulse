import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateTransitGatewayMeteringPolicyEntryRequest,
  CreateTransitGatewayMeteringPolicyEntryResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface CreateTransitGatewayMeteringPolicyEntryCommandInput
  extends CreateTransitGatewayMeteringPolicyEntryRequest {}
export interface CreateTransitGatewayMeteringPolicyEntryCommandOutput
  extends CreateTransitGatewayMeteringPolicyEntryResult,
    __MetadataBearer {}
declare const CreateTransitGatewayMeteringPolicyEntryCommand_base: {
  new (
    input: CreateTransitGatewayMeteringPolicyEntryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateTransitGatewayMeteringPolicyEntryCommandInput,
    CreateTransitGatewayMeteringPolicyEntryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateTransitGatewayMeteringPolicyEntryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateTransitGatewayMeteringPolicyEntryCommandInput,
    CreateTransitGatewayMeteringPolicyEntryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateTransitGatewayMeteringPolicyEntryCommand extends CreateTransitGatewayMeteringPolicyEntryCommand_base {
  protected static __types: {
    api: {
      input: CreateTransitGatewayMeteringPolicyEntryRequest;
      output: CreateTransitGatewayMeteringPolicyEntryResult;
    };
    sdk: {
      input: CreateTransitGatewayMeteringPolicyEntryCommandInput;
      output: CreateTransitGatewayMeteringPolicyEntryCommandOutput;
    };
  };
}
