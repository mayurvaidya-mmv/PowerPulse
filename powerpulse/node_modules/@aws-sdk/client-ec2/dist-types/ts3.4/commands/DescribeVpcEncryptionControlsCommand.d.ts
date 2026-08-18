import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeVpcEncryptionControlsRequest,
  DescribeVpcEncryptionControlsResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface DescribeVpcEncryptionControlsCommandInput
  extends DescribeVpcEncryptionControlsRequest {}
export interface DescribeVpcEncryptionControlsCommandOutput
  extends DescribeVpcEncryptionControlsResult,
    __MetadataBearer {}
declare const DescribeVpcEncryptionControlsCommand_base: {
  new (
    input: DescribeVpcEncryptionControlsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeVpcEncryptionControlsCommandInput,
    DescribeVpcEncryptionControlsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeVpcEncryptionControlsCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeVpcEncryptionControlsCommandInput,
    DescribeVpcEncryptionControlsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeVpcEncryptionControlsCommand extends DescribeVpcEncryptionControlsCommand_base {
  protected static __types: {
    api: {
      input: DescribeVpcEncryptionControlsRequest;
      output: DescribeVpcEncryptionControlsResult;
    };
    sdk: {
      input: DescribeVpcEncryptionControlsCommandInput;
      output: DescribeVpcEncryptionControlsCommandOutput;
    };
  };
}
