import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteVpcEncryptionControlRequest,
  DeleteVpcEncryptionControlResult,
} from "../models/models_3";
export { __MetadataBearer };
export { $Command };
export interface DeleteVpcEncryptionControlCommandInput
  extends DeleteVpcEncryptionControlRequest {}
export interface DeleteVpcEncryptionControlCommandOutput
  extends DeleteVpcEncryptionControlResult,
    __MetadataBearer {}
declare const DeleteVpcEncryptionControlCommand_base: {
  new (
    input: DeleteVpcEncryptionControlCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteVpcEncryptionControlCommandInput,
    DeleteVpcEncryptionControlCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteVpcEncryptionControlCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteVpcEncryptionControlCommandInput,
    DeleteVpcEncryptionControlCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteVpcEncryptionControlCommand extends DeleteVpcEncryptionControlCommand_base {
  protected static __types: {
    api: {
      input: DeleteVpcEncryptionControlRequest;
      output: DeleteVpcEncryptionControlResult;
    };
    sdk: {
      input: DeleteVpcEncryptionControlCommandInput;
      output: DeleteVpcEncryptionControlCommandOutput;
    };
  };
}
