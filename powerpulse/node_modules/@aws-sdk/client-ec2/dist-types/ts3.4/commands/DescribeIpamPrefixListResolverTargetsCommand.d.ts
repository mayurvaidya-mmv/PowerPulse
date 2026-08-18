import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeIpamPrefixListResolverTargetsRequest,
  DescribeIpamPrefixListResolverTargetsResult,
} from "../models/models_4";
export { __MetadataBearer };
export { $Command };
export interface DescribeIpamPrefixListResolverTargetsCommandInput
  extends DescribeIpamPrefixListResolverTargetsRequest {}
export interface DescribeIpamPrefixListResolverTargetsCommandOutput
  extends DescribeIpamPrefixListResolverTargetsResult,
    __MetadataBearer {}
declare const DescribeIpamPrefixListResolverTargetsCommand_base: {
  new (
    input: DescribeIpamPrefixListResolverTargetsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeIpamPrefixListResolverTargetsCommandInput,
    DescribeIpamPrefixListResolverTargetsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeIpamPrefixListResolverTargetsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeIpamPrefixListResolverTargetsCommandInput,
    DescribeIpamPrefixListResolverTargetsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeIpamPrefixListResolverTargetsCommand extends DescribeIpamPrefixListResolverTargetsCommand_base {
  protected static __types: {
    api: {
      input: DescribeIpamPrefixListResolverTargetsRequest;
      output: DescribeIpamPrefixListResolverTargetsResult;
    };
    sdk: {
      input: DescribeIpamPrefixListResolverTargetsCommandInput;
      output: DescribeIpamPrefixListResolverTargetsCommandOutput;
    };
  };
}
