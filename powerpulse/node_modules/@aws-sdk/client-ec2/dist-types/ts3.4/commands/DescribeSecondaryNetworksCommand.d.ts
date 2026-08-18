import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeSecondaryNetworksRequest,
  DescribeSecondaryNetworksResult,
} from "../models/models_4";
export { __MetadataBearer };
export { $Command };
export interface DescribeSecondaryNetworksCommandInput
  extends DescribeSecondaryNetworksRequest {}
export interface DescribeSecondaryNetworksCommandOutput
  extends DescribeSecondaryNetworksResult,
    __MetadataBearer {}
declare const DescribeSecondaryNetworksCommand_base: {
  new (
    input: DescribeSecondaryNetworksCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeSecondaryNetworksCommandInput,
    DescribeSecondaryNetworksCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeSecondaryNetworksCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeSecondaryNetworksCommandInput,
    DescribeSecondaryNetworksCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeSecondaryNetworksCommand extends DescribeSecondaryNetworksCommand_base {
  protected static __types: {
    api: {
      input: DescribeSecondaryNetworksRequest;
      output: DescribeSecondaryNetworksResult;
    };
    sdk: {
      input: DescribeSecondaryNetworksCommandInput;
      output: DescribeSecondaryNetworksCommandOutput;
    };
  };
}
