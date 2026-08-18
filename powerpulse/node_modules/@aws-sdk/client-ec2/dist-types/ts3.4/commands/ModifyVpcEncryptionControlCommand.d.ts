import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  ModifyVpcEncryptionControlRequest,
  ModifyVpcEncryptionControlResult,
} from "../models/models_7";
export { __MetadataBearer };
export { $Command };
export interface ModifyVpcEncryptionControlCommandInput
  extends ModifyVpcEncryptionControlRequest {}
export interface ModifyVpcEncryptionControlCommandOutput
  extends ModifyVpcEncryptionControlResult,
    __MetadataBearer {}
declare const ModifyVpcEncryptionControlCommand_base: {
  new (
    input: ModifyVpcEncryptionControlCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyVpcEncryptionControlCommandInput,
    ModifyVpcEncryptionControlCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ModifyVpcEncryptionControlCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyVpcEncryptionControlCommandInput,
    ModifyVpcEncryptionControlCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ModifyVpcEncryptionControlCommand extends ModifyVpcEncryptionControlCommand_base {
  protected static __types: {
    api: {
      input: ModifyVpcEncryptionControlRequest;
      output: ModifyVpcEncryptionControlResult;
    };
    sdk: {
      input: ModifyVpcEncryptionControlCommandInput;
      output: ModifyVpcEncryptionControlCommandOutput;
    };
  };
}
