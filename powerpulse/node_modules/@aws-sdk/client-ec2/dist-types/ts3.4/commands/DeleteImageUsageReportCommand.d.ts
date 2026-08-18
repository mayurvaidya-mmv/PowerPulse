import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteImageUsageReportRequest,
  DeleteImageUsageReportResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteImageUsageReportCommandInput
  extends DeleteImageUsageReportRequest {}
export interface DeleteImageUsageReportCommandOutput
  extends DeleteImageUsageReportResult,
    __MetadataBearer {}
declare const DeleteImageUsageReportCommand_base: {
  new (
    input: DeleteImageUsageReportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteImageUsageReportCommandInput,
    DeleteImageUsageReportCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteImageUsageReportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteImageUsageReportCommandInput,
    DeleteImageUsageReportCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteImageUsageReportCommand extends DeleteImageUsageReportCommand_base {
  protected static __types: {
    api: {
      input: DeleteImageUsageReportRequest;
      output: DeleteImageUsageReportResult;
    };
    sdk: {
      input: DeleteImageUsageReportCommandInput;
      output: DeleteImageUsageReportCommandOutput;
    };
  };
}
