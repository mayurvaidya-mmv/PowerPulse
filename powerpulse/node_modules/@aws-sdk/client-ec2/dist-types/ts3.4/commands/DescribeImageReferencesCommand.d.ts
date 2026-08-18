import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeImageReferencesRequest,
  DescribeImageReferencesResult,
} from "../models/models_3";
export { __MetadataBearer };
export { $Command };
export interface DescribeImageReferencesCommandInput
  extends DescribeImageReferencesRequest {}
export interface DescribeImageReferencesCommandOutput
  extends DescribeImageReferencesResult,
    __MetadataBearer {}
declare const DescribeImageReferencesCommand_base: {
  new (
    input: DescribeImageReferencesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeImageReferencesCommandInput,
    DescribeImageReferencesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DescribeImageReferencesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeImageReferencesCommandInput,
    DescribeImageReferencesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeImageReferencesCommand extends DescribeImageReferencesCommand_base {
  protected static __types: {
    api: {
      input: DescribeImageReferencesRequest;
      output: DescribeImageReferencesResult;
    };
    sdk: {
      input: DescribeImageReferencesCommandInput;
      output: DescribeImageReferencesCommandOutput;
    };
  };
}
