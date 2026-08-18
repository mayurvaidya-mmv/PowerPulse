import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateDelegateMacVolumeOwnershipTaskRequest,
  CreateDelegateMacVolumeOwnershipTaskResult,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateDelegateMacVolumeOwnershipTaskCommandInput
  extends CreateDelegateMacVolumeOwnershipTaskRequest {}
export interface CreateDelegateMacVolumeOwnershipTaskCommandOutput
  extends CreateDelegateMacVolumeOwnershipTaskResult,
    __MetadataBearer {}
declare const CreateDelegateMacVolumeOwnershipTaskCommand_base: {
  new (
    input: CreateDelegateMacVolumeOwnershipTaskCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateDelegateMacVolumeOwnershipTaskCommandInput,
    CreateDelegateMacVolumeOwnershipTaskCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateDelegateMacVolumeOwnershipTaskCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateDelegateMacVolumeOwnershipTaskCommandInput,
    CreateDelegateMacVolumeOwnershipTaskCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateDelegateMacVolumeOwnershipTaskCommand extends CreateDelegateMacVolumeOwnershipTaskCommand_base {
  protected static __types: {
    api: {
      input: CreateDelegateMacVolumeOwnershipTaskRequest;
      output: CreateDelegateMacVolumeOwnershipTaskResult;
    };
    sdk: {
      input: CreateDelegateMacVolumeOwnershipTaskCommandInput;
      output: CreateDelegateMacVolumeOwnershipTaskCommandOutput;
    };
  };
}
