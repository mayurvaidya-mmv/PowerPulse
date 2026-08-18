import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DisableCapacityManagerRequest,
  DisableCapacityManagerResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface DisableCapacityManagerCommandInput
  extends DisableCapacityManagerRequest {}
export interface DisableCapacityManagerCommandOutput
  extends DisableCapacityManagerResult,
    __MetadataBearer {}
declare const DisableCapacityManagerCommand_base: {
  new (
    input: DisableCapacityManagerCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DisableCapacityManagerCommandInput,
    DisableCapacityManagerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DisableCapacityManagerCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DisableCapacityManagerCommandInput,
    DisableCapacityManagerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DisableCapacityManagerCommand extends DisableCapacityManagerCommand_base {
  protected static __types: {
    api: {
      input: DisableCapacityManagerRequest;
      output: DisableCapacityManagerResult;
    };
    sdk: {
      input: DisableCapacityManagerCommandInput;
      output: DisableCapacityManagerCommandOutput;
    };
  };
}
