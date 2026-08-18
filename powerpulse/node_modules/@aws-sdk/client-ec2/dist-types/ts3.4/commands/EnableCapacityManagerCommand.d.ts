import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  EnableCapacityManagerRequest,
  EnableCapacityManagerResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface EnableCapacityManagerCommandInput
  extends EnableCapacityManagerRequest {}
export interface EnableCapacityManagerCommandOutput
  extends EnableCapacityManagerResult,
    __MetadataBearer {}
declare const EnableCapacityManagerCommand_base: {
  new (
    input: EnableCapacityManagerCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    EnableCapacityManagerCommandInput,
    EnableCapacityManagerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [EnableCapacityManagerCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    EnableCapacityManagerCommandInput,
    EnableCapacityManagerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class EnableCapacityManagerCommand extends EnableCapacityManagerCommand_base {
  protected static __types: {
    api: {
      input: EnableCapacityManagerRequest;
      output: EnableCapacityManagerResult;
    };
    sdk: {
      input: EnableCapacityManagerCommandInput;
      output: EnableCapacityManagerCommandOutput;
    };
  };
}
