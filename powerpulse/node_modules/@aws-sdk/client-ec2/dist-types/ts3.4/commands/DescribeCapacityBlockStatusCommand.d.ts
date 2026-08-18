import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeCapacityBlockStatusRequest,
  DescribeCapacityBlockStatusResult,
} from "../models/models_3";
export { __MetadataBearer };
export { $Command };
export interface DescribeCapacityBlockStatusCommandInput
  extends DescribeCapacityBlockStatusRequest {}
export interface DescribeCapacityBlockStatusCommandOutput
  extends DescribeCapacityBlockStatusResult,
    __MetadataBearer {}
declare const DescribeCapacityBlockStatusCommand_base: {
  new (
    input: DescribeCapacityBlockStatusCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeCapacityBlockStatusCommandInput,
    DescribeCapacityBlockStatusCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeCapacityBlockStatusCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeCapacityBlockStatusCommandInput,
    DescribeCapacityBlockStatusCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeCapacityBlockStatusCommand extends DescribeCapacityBlockStatusCommand_base {
  protected static __types: {
    api: {
      input: DescribeCapacityBlockStatusRequest;
      output: DescribeCapacityBlockStatusResult;
    };
    sdk: {
      input: DescribeCapacityBlockStatusCommandInput;
      output: DescribeCapacityBlockStatusCommandOutput;
    };
  };
}
