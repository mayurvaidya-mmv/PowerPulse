import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeInstanceSqlHaStatesRequest,
  DescribeInstanceSqlHaStatesResult,
} from "../models/models_4";
export { __MetadataBearer };
export { $Command };
export interface DescribeInstanceSqlHaStatesCommandInput
  extends DescribeInstanceSqlHaStatesRequest {}
export interface DescribeInstanceSqlHaStatesCommandOutput
  extends DescribeInstanceSqlHaStatesResult,
    __MetadataBearer {}
declare const DescribeInstanceSqlHaStatesCommand_base: {
  new (
    input: DescribeInstanceSqlHaStatesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeInstanceSqlHaStatesCommandInput,
    DescribeInstanceSqlHaStatesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeInstanceSqlHaStatesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeInstanceSqlHaStatesCommandInput,
    DescribeInstanceSqlHaStatesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeInstanceSqlHaStatesCommand extends DescribeInstanceSqlHaStatesCommand_base {
  protected static __types: {
    api: {
      input: DescribeInstanceSqlHaStatesRequest;
      output: DescribeInstanceSqlHaStatesResult;
    };
    sdk: {
      input: DescribeInstanceSqlHaStatesCommandInput;
      output: DescribeInstanceSqlHaStatesCommandOutput;
    };
  };
}
