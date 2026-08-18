import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeInstanceSqlHaHistoryStatesRequest,
  DescribeInstanceSqlHaHistoryStatesResult,
} from "../models/models_4";
export { __MetadataBearer };
export { $Command };
export interface DescribeInstanceSqlHaHistoryStatesCommandInput
  extends DescribeInstanceSqlHaHistoryStatesRequest {}
export interface DescribeInstanceSqlHaHistoryStatesCommandOutput
  extends DescribeInstanceSqlHaHistoryStatesResult,
    __MetadataBearer {}
declare const DescribeInstanceSqlHaHistoryStatesCommand_base: {
  new (
    input: DescribeInstanceSqlHaHistoryStatesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeInstanceSqlHaHistoryStatesCommandInput,
    DescribeInstanceSqlHaHistoryStatesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeInstanceSqlHaHistoryStatesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeInstanceSqlHaHistoryStatesCommandInput,
    DescribeInstanceSqlHaHistoryStatesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeInstanceSqlHaHistoryStatesCommand extends DescribeInstanceSqlHaHistoryStatesCommand_base {
  protected static __types: {
    api: {
      input: DescribeInstanceSqlHaHistoryStatesRequest;
      output: DescribeInstanceSqlHaHistoryStatesResult;
    };
    sdk: {
      input: DescribeInstanceSqlHaHistoryStatesCommandInput;
      output: DescribeInstanceSqlHaHistoryStatesCommandOutput;
    };
  };
}
