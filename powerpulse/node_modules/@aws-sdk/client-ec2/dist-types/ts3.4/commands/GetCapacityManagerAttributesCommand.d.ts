import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetCapacityManagerAttributesRequest,
  GetCapacityManagerAttributesResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface GetCapacityManagerAttributesCommandInput
  extends GetCapacityManagerAttributesRequest {}
export interface GetCapacityManagerAttributesCommandOutput
  extends GetCapacityManagerAttributesResult,
    __MetadataBearer {}
declare const GetCapacityManagerAttributesCommand_base: {
  new (
    input: GetCapacityManagerAttributesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetCapacityManagerAttributesCommandInput,
    GetCapacityManagerAttributesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetCapacityManagerAttributesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetCapacityManagerAttributesCommandInput,
    GetCapacityManagerAttributesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetCapacityManagerAttributesCommand extends GetCapacityManagerAttributesCommand_base {
  protected static __types: {
    api: {
      input: GetCapacityManagerAttributesRequest;
      output: GetCapacityManagerAttributesResult;
    };
    sdk: {
      input: GetCapacityManagerAttributesCommandInput;
      output: GetCapacityManagerAttributesCommandOutput;
    };
  };
}
