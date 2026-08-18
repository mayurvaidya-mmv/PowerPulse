import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateImageUsageReportRequest,
  CreateImageUsageReportResult,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface CreateImageUsageReportCommandInput
  extends CreateImageUsageReportRequest {}
export interface CreateImageUsageReportCommandOutput
  extends CreateImageUsageReportResult,
    __MetadataBearer {}
declare const CreateImageUsageReportCommand_base: {
  new (
    input: CreateImageUsageReportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateImageUsageReportCommandInput,
    CreateImageUsageReportCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateImageUsageReportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateImageUsageReportCommandInput,
    CreateImageUsageReportCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateImageUsageReportCommand extends CreateImageUsageReportCommand_base {
  protected static __types: {
    api: {
      input: CreateImageUsageReportRequest;
      output: CreateImageUsageReportResult;
    };
    sdk: {
      input: CreateImageUsageReportCommandInput;
      output: CreateImageUsageReportCommandOutput;
    };
  };
}
