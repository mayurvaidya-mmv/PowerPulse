import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeImageUsageReportsRequest,
  DescribeImageUsageReportsResult,
} from "../models/models_3";
export { __MetadataBearer };
export { $Command };
export interface DescribeImageUsageReportsCommandInput
  extends DescribeImageUsageReportsRequest {}
export interface DescribeImageUsageReportsCommandOutput
  extends DescribeImageUsageReportsResult,
    __MetadataBearer {}
declare const DescribeImageUsageReportsCommand_base: {
  new (
    input: DescribeImageUsageReportsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeImageUsageReportsCommandInput,
    DescribeImageUsageReportsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeImageUsageReportsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeImageUsageReportsCommandInput,
    DescribeImageUsageReportsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeImageUsageReportsCommand extends DescribeImageUsageReportsCommand_base {
  protected static __types: {
    api: {
      input: DescribeImageUsageReportsRequest;
      output: DescribeImageUsageReportsResult;
    };
    sdk: {
      input: DescribeImageUsageReportsCommandInput;
      output: DescribeImageUsageReportsCommandOutput;
    };
  };
}
