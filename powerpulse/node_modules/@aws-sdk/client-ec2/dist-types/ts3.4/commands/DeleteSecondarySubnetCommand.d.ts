import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteSecondarySubnetRequest,
  DeleteSecondarySubnetResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteSecondarySubnetCommandInput
  extends DeleteSecondarySubnetRequest {}
export interface DeleteSecondarySubnetCommandOutput
  extends DeleteSecondarySubnetResult,
    __MetadataBearer {}
declare const DeleteSecondarySubnetCommand_base: {
  new (
    input: DeleteSecondarySubnetCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteSecondarySubnetCommandInput,
    DeleteSecondarySubnetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteSecondarySubnetCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteSecondarySubnetCommandInput,
    DeleteSecondarySubnetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteSecondarySubnetCommand extends DeleteSecondarySubnetCommand_base {
  protected static __types: {
    api: {
      input: DeleteSecondarySubnetRequest;
      output: DeleteSecondarySubnetResult;
    };
    sdk: {
      input: DeleteSecondarySubnetCommandInput;
      output: DeleteSecondarySubnetCommandOutput;
    };
  };
}
