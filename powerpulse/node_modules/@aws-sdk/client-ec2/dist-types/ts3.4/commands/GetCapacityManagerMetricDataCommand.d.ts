import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetCapacityManagerMetricDataRequest,
  GetCapacityManagerMetricDataResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface GetCapacityManagerMetricDataCommandInput
  extends GetCapacityManagerMetricDataRequest {}
export interface GetCapacityManagerMetricDataCommandOutput
  extends GetCapacityManagerMetricDataResult,
    __MetadataBearer {}
declare const GetCapacityManagerMetricDataCommand_base: {
  new (
    input: GetCapacityManagerMetricDataCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetCapacityManagerMetricDataCommandInput,
    GetCapacityManagerMetricDataCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetCapacityManagerMetricDataCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetCapacityManagerMetricDataCommandInput,
    GetCapacityManagerMetricDataCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetCapacityManagerMetricDataCommand extends GetCapacityManagerMetricDataCommand_base {
  protected static __types: {
    api: {
      input: GetCapacityManagerMetricDataRequest;
      output: GetCapacityManagerMetricDataResult;
    };
    sdk: {
      input: GetCapacityManagerMetricDataCommandInput;
      output: GetCapacityManagerMetricDataCommandOutput;
    };
  };
}
