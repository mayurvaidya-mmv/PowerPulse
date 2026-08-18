import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeIpamPoliciesRequest,
  DescribeIpamPoliciesResult,
} from "../models/models_4";
export { __MetadataBearer };
export { $Command };
export interface DescribeIpamPoliciesCommandInput
  extends DescribeIpamPoliciesRequest {}
export interface DescribeIpamPoliciesCommandOutput
  extends DescribeIpamPoliciesResult,
    __MetadataBearer {}
declare const DescribeIpamPoliciesCommand_base: {
  new (
    input: DescribeIpamPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeIpamPoliciesCommandInput,
    DescribeIpamPoliciesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeIpamPoliciesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeIpamPoliciesCommandInput,
    DescribeIpamPoliciesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeIpamPoliciesCommand extends DescribeIpamPoliciesCommand_base {
  protected static __types: {
    api: {
      input: DescribeIpamPoliciesRequest;
      output: DescribeIpamPoliciesResult;
    };
    sdk: {
      input: DescribeIpamPoliciesCommandInput;
      output: DescribeIpamPoliciesCommandOutput;
    };
  };
}
