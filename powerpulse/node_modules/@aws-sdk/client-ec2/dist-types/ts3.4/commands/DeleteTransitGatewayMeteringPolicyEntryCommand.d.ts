import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteTransitGatewayMeteringPolicyEntryRequest,
  DeleteTransitGatewayMeteringPolicyEntryResult,
} from "../models/models_3";
export { __MetadataBearer };
export { $Command };
export interface DeleteTransitGatewayMeteringPolicyEntryCommandInput
  extends DeleteTransitGatewayMeteringPolicyEntryRequest {}
export interface DeleteTransitGatewayMeteringPolicyEntryCommandOutput
  extends DeleteTransitGatewayMeteringPolicyEntryResult,
    __MetadataBearer {}
declare const DeleteTransitGatewayMeteringPolicyEntryCommand_base: {
  new (
    input: DeleteTransitGatewayMeteringPolicyEntryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteTransitGatewayMeteringPolicyEntryCommandInput,
    DeleteTransitGatewayMeteringPolicyEntryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteTransitGatewayMeteringPolicyEntryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteTransitGatewayMeteringPolicyEntryCommandInput,
    DeleteTransitGatewayMeteringPolicyEntryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteTransitGatewayMeteringPolicyEntryCommand extends DeleteTransitGatewayMeteringPolicyEntryCommand_base {
  protected static __types: {
    api: {
      input: DeleteTransitGatewayMeteringPolicyEntryRequest;
      output: DeleteTransitGatewayMeteringPolicyEntryResult;
    };
    sdk: {
      input: DeleteTransitGatewayMeteringPolicyEntryCommandInput;
      output: DeleteTransitGatewayMeteringPolicyEntryCommandOutput;
    };
  };
}
