import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeOutpostLagsRequest,
  DescribeOutpostLagsResult,
} from "../models/models_4";
export { __MetadataBearer };
export { $Command };
export interface DescribeOutpostLagsCommandInput
  extends DescribeOutpostLagsRequest {}
export interface DescribeOutpostLagsCommandOutput
  extends DescribeOutpostLagsResult,
    __MetadataBearer {}
declare const DescribeOutpostLagsCommand_base: {
  new (
    input: DescribeOutpostLagsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeOutpostLagsCommandInput,
    DescribeOutpostLagsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeOutpostLagsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeOutpostLagsCommandInput,
    DescribeOutpostLagsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeOutpostLagsCommand extends DescribeOutpostLagsCommand_base {
  protected static __types: {
    api: {
      input: DescribeOutpostLagsRequest;
      output: DescribeOutpostLagsResult;
    };
    sdk: {
      input: DescribeOutpostLagsCommandInput;
      output: DescribeOutpostLagsCommandOutput;
    };
  };
}
