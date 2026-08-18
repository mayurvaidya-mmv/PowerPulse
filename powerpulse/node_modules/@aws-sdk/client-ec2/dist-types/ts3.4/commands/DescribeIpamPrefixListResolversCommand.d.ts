import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeIpamPrefixListResolversRequest,
  DescribeIpamPrefixListResolversResult,
} from "../models/models_4";
export { __MetadataBearer };
export { $Command };
export interface DescribeIpamPrefixListResolversCommandInput
  extends DescribeIpamPrefixListResolversRequest {}
export interface DescribeIpamPrefixListResolversCommandOutput
  extends DescribeIpamPrefixListResolversResult,
    __MetadataBearer {}
declare const DescribeIpamPrefixListResolversCommand_base: {
  new (
    input: DescribeIpamPrefixListResolversCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeIpamPrefixListResolversCommandInput,
    DescribeIpamPrefixListResolversCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeIpamPrefixListResolversCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeIpamPrefixListResolversCommandInput,
    DescribeIpamPrefixListResolversCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeIpamPrefixListResolversCommand extends DescribeIpamPrefixListResolversCommand_base {
  protected static __types: {
    api: {
      input: DescribeIpamPrefixListResolversRequest;
      output: DescribeIpamPrefixListResolversResult;
    };
    sdk: {
      input: DescribeIpamPrefixListResolversCommandInput;
      output: DescribeIpamPrefixListResolversCommandOutput;
    };
  };
}
