import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetCapacityManagerMetricDimensionsRequest,
  GetCapacityManagerMetricDimensionsResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface GetCapacityManagerMetricDimensionsCommandInput
  extends GetCapacityManagerMetricDimensionsRequest {}
export interface GetCapacityManagerMetricDimensionsCommandOutput
  extends GetCapacityManagerMetricDimensionsResult,
    __MetadataBearer {}
declare const GetCapacityManagerMetricDimensionsCommand_base: {
  new (
    input: GetCapacityManagerMetricDimensionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetCapacityManagerMetricDimensionsCommandInput,
    GetCapacityManagerMetricDimensionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetCapacityManagerMetricDimensionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetCapacityManagerMetricDimensionsCommandInput,
    GetCapacityManagerMetricDimensionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetCapacityManagerMetricDimensionsCommand extends GetCapacityManagerMetricDimensionsCommand_base {
  protected static __types: {
    api: {
      input: GetCapacityManagerMetricDimensionsRequest;
      output: GetCapacityManagerMetricDimensionsResult;
    };
    sdk: {
      input: GetCapacityManagerMetricDimensionsCommandInput;
      output: GetCapacityManagerMetricDimensionsCommandOutput;
    };
  };
}
