import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeCapacityManagerDataExportsRequest,
  DescribeCapacityManagerDataExportsResult,
} from "../models/models_3";
export { __MetadataBearer };
export { $Command };
export interface DescribeCapacityManagerDataExportsCommandInput
  extends DescribeCapacityManagerDataExportsRequest {}
export interface DescribeCapacityManagerDataExportsCommandOutput
  extends DescribeCapacityManagerDataExportsResult,
    __MetadataBearer {}
declare const DescribeCapacityManagerDataExportsCommand_base: {
  new (
    input: DescribeCapacityManagerDataExportsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeCapacityManagerDataExportsCommandInput,
    DescribeCapacityManagerDataExportsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeCapacityManagerDataExportsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeCapacityManagerDataExportsCommandInput,
    DescribeCapacityManagerDataExportsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeCapacityManagerDataExportsCommand extends DescribeCapacityManagerDataExportsCommand_base {
  protected static __types: {
    api: {
      input: DescribeCapacityManagerDataExportsRequest;
      output: DescribeCapacityManagerDataExportsResult;
    };
    sdk: {
      input: DescribeCapacityManagerDataExportsCommandInput;
      output: DescribeCapacityManagerDataExportsCommandOutput;
    };
  };
}
