import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeTransitGatewayMeteringPoliciesRequest,
  DescribeTransitGatewayMeteringPoliciesResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface DescribeTransitGatewayMeteringPoliciesCommandInput
  extends DescribeTransitGatewayMeteringPoliciesRequest {}
export interface DescribeTransitGatewayMeteringPoliciesCommandOutput
  extends DescribeTransitGatewayMeteringPoliciesResult,
    __MetadataBearer {}
declare const DescribeTransitGatewayMeteringPoliciesCommand_base: {
  new (
    input: DescribeTransitGatewayMeteringPoliciesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeTransitGatewayMeteringPoliciesCommandInput,
    DescribeTransitGatewayMeteringPoliciesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeTransitGatewayMeteringPoliciesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeTransitGatewayMeteringPoliciesCommandInput,
    DescribeTransitGatewayMeteringPoliciesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeTransitGatewayMeteringPoliciesCommand extends DescribeTransitGatewayMeteringPoliciesCommand_base {
  protected static __types: {
    api: {
      input: DescribeTransitGatewayMeteringPoliciesRequest;
      output: DescribeTransitGatewayMeteringPoliciesResult;
    };
    sdk: {
      input: DescribeTransitGatewayMeteringPoliciesCommandInput;
      output: DescribeTransitGatewayMeteringPoliciesCommandOutput;
    };
  };
}
