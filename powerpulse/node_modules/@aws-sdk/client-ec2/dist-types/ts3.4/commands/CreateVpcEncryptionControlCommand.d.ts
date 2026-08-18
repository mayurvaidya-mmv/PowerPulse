import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateVpcEncryptionControlRequest,
  CreateVpcEncryptionControlResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface CreateVpcEncryptionControlCommandInput
  extends CreateVpcEncryptionControlRequest {}
export interface CreateVpcEncryptionControlCommandOutput
  extends CreateVpcEncryptionControlResult,
    __MetadataBearer {}
declare const CreateVpcEncryptionControlCommand_base: {
  new (
    input: CreateVpcEncryptionControlCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateVpcEncryptionControlCommandInput,
    CreateVpcEncryptionControlCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateVpcEncryptionControlCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateVpcEncryptionControlCommandInput,
    CreateVpcEncryptionControlCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateVpcEncryptionControlCommand extends CreateVpcEncryptionControlCommand_base {
  protected static __types: {
    api: {
      input: CreateVpcEncryptionControlRequest;
      output: CreateVpcEncryptionControlResult;
    };
    sdk: {
      input: CreateVpcEncryptionControlCommandInput;
      output: CreateVpcEncryptionControlCommandOutput;
    };
  };
}
