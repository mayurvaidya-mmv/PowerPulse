import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateCapacityManagerDataExportRequest,
  CreateCapacityManagerDataExportResult,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateCapacityManagerDataExportCommandInput
  extends CreateCapacityManagerDataExportRequest {}
export interface CreateCapacityManagerDataExportCommandOutput
  extends CreateCapacityManagerDataExportResult,
    __MetadataBearer {}
declare const CreateCapacityManagerDataExportCommand_base: {
  new (
    input: CreateCapacityManagerDataExportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateCapacityManagerDataExportCommandInput,
    CreateCapacityManagerDataExportCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateCapacityManagerDataExportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateCapacityManagerDataExportCommandInput,
    CreateCapacityManagerDataExportCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateCapacityManagerDataExportCommand extends CreateCapacityManagerDataExportCommand_base {
  protected static __types: {
    api: {
      input: CreateCapacityManagerDataExportRequest;
      output: CreateCapacityManagerDataExportResult;
    };
    sdk: {
      input: CreateCapacityManagerDataExportCommandInput;
      output: CreateCapacityManagerDataExportCommandOutput;
    };
  };
}
