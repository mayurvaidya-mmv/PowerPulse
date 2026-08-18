import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeCapacityBlocksRequest,
  DescribeCapacityBlocksResult,
} from "../models/models_3";
export { __MetadataBearer };
export { $Command };
export interface DescribeCapacityBlocksCommandInput
  extends DescribeCapacityBlocksRequest {}
export interface DescribeCapacityBlocksCommandOutput
  extends DescribeCapacityBlocksResult,
    __MetadataBearer {}
declare const DescribeCapacityBlocksCommand_base: {
  new (
    input: DescribeCapacityBlocksCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeCapacityBlocksCommandInput,
    DescribeCapacityBlocksCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeCapacityBlocksCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeCapacityBlocksCommandInput,
    DescribeCapacityBlocksCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeCapacityBlocksCommand extends DescribeCapacityBlocksCommand_base {
  protected static __types: {
    api: {
      input: DescribeCapacityBlocksRequest;
      output: DescribeCapacityBlocksResult;
    };
    sdk: {
      input: DescribeCapacityBlocksCommandInput;
      output: DescribeCapacityBlocksCommandOutput;
    };
  };
}
