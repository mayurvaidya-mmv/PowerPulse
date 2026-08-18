import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeSecondarySubnetsRequest,
  DescribeSecondarySubnetsResult,
} from "../models/models_4";
export { __MetadataBearer };
export { $Command };
export interface DescribeSecondarySubnetsCommandInput
  extends DescribeSecondarySubnetsRequest {}
export interface DescribeSecondarySubnetsCommandOutput
  extends DescribeSecondarySubnetsResult,
    __MetadataBearer {}
declare const DescribeSecondarySubnetsCommand_base: {
  new (
    input: DescribeSecondarySubnetsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeSecondarySubnetsCommandInput,
    DescribeSecondarySubnetsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeSecondarySubnetsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeSecondarySubnetsCommandInput,
    DescribeSecondarySubnetsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeSecondarySubnetsCommand extends DescribeSecondarySubnetsCommand_base {
  protected static __types: {
    api: {
      input: DescribeSecondarySubnetsRequest;
      output: DescribeSecondarySubnetsResult;
    };
    sdk: {
      input: DescribeSecondarySubnetsCommandInput;
      output: DescribeSecondarySubnetsCommandOutput;
    };
  };
}
