import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetImageAncestryRequest,
  GetImageAncestryResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface GetImageAncestryCommandInput extends GetImageAncestryRequest {}
export interface GetImageAncestryCommandOutput
  extends GetImageAncestryResult,
    __MetadataBearer {}
declare const GetImageAncestryCommand_base: {
  new (
    input: GetImageAncestryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetImageAncestryCommandInput,
    GetImageAncestryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetImageAncestryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetImageAncestryCommandInput,
    GetImageAncestryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetImageAncestryCommand extends GetImageAncestryCommand_base {
  protected static __types: {
    api: {
      input: GetImageAncestryRequest;
      output: GetImageAncestryResult;
    };
    sdk: {
      input: GetImageAncestryCommandInput;
      output: GetImageAncestryCommandOutput;
    };
  };
}
