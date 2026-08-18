import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeVpnConcentratorsRequest,
  DescribeVpnConcentratorsResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface DescribeVpnConcentratorsCommandInput
  extends DescribeVpnConcentratorsRequest {}
export interface DescribeVpnConcentratorsCommandOutput
  extends DescribeVpnConcentratorsResult,
    __MetadataBearer {}
declare const DescribeVpnConcentratorsCommand_base: {
  new (
    input: DescribeVpnConcentratorsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeVpnConcentratorsCommandInput,
    DescribeVpnConcentratorsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeVpnConcentratorsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeVpnConcentratorsCommandInput,
    DescribeVpnConcentratorsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeVpnConcentratorsCommand extends DescribeVpnConcentratorsCommand_base {
  protected static __types: {
    api: {
      input: DescribeVpnConcentratorsRequest;
      output: DescribeVpnConcentratorsResult;
    };
    sdk: {
      input: DescribeVpnConcentratorsCommandInput;
      output: DescribeVpnConcentratorsCommandOutput;
    };
  };
}
