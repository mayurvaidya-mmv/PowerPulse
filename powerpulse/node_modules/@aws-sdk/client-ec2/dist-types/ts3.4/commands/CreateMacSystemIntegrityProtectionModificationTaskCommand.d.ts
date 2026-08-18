import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateMacSystemIntegrityProtectionModificationTaskRequest,
  CreateMacSystemIntegrityProtectionModificationTaskResult,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface CreateMacSystemIntegrityProtectionModificationTaskCommandInput
  extends CreateMacSystemIntegrityProtectionModificationTaskRequest {}
export interface CreateMacSystemIntegrityProtectionModificationTaskCommandOutput
  extends CreateMacSystemIntegrityProtectionModificationTaskResult,
    __MetadataBearer {}
declare const CreateMacSystemIntegrityProtectionModificationTaskCommand_base: {
  new (
    input: CreateMacSystemIntegrityProtectionModificationTaskCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateMacSystemIntegrityProtectionModificationTaskCommandInput,
    CreateMacSystemIntegrityProtectionModificationTaskCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateMacSystemIntegrityProtectionModificationTaskCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateMacSystemIntegrityProtectionModificationTaskCommandInput,
    CreateMacSystemIntegrityProtectionModificationTaskCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateMacSystemIntegrityProtectionModificationTaskCommand extends CreateMacSystemIntegrityProtectionModificationTaskCommand_base {
  protected static __types: {
    api: {
      input: CreateMacSystemIntegrityProtectionModificationTaskRequest;
      output: CreateMacSystemIntegrityProtectionModificationTaskResult;
    };
    sdk: {
      input: CreateMacSystemIntegrityProtectionModificationTaskCommandInput;
      output: CreateMacSystemIntegrityProtectionModificationTaskCommandOutput;
    };
  };
}
