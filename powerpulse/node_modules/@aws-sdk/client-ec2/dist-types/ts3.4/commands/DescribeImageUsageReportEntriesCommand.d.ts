import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeImageUsageReportEntriesRequest,
  DescribeImageUsageReportEntriesResult,
} from "../models/models_3";
export { __MetadataBearer };
export { $Command };
export interface DescribeImageUsageReportEntriesCommandInput
  extends DescribeImageUsageReportEntriesRequest {}
export interface DescribeImageUsageReportEntriesCommandOutput
  extends DescribeImageUsageReportEntriesResult,
    __MetadataBearer {}
declare const DescribeImageUsageReportEntriesCommand_base: {
  new (
    input: DescribeImageUsageReportEntriesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeImageUsageReportEntriesCommandInput,
    DescribeImageUsageReportEntriesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeImageUsageReportEntriesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeImageUsageReportEntriesCommandInput,
    DescribeImageUsageReportEntriesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeImageUsageReportEntriesCommand extends DescribeImageUsageReportEntriesCommand_base {
  protected static __types: {
    api: {
      input: DescribeImageUsageReportEntriesRequest;
      output: DescribeImageUsageReportEntriesResult;
    };
    sdk: {
      input: DescribeImageUsageReportEntriesCommandInput;
      output: DescribeImageUsageReportEntriesCommandOutput;
    };
  };
}
