import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DisableInstanceSqlHaStandbyDetectionsRequest,
  DisableInstanceSqlHaStandbyDetectionsResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface DisableInstanceSqlHaStandbyDetectionsCommandInput
  extends DisableInstanceSqlHaStandbyDetectionsRequest {}
export interface DisableInstanceSqlHaStandbyDetectionsCommandOutput
  extends DisableInstanceSqlHaStandbyDetectionsResult,
    __MetadataBearer {}
declare const DisableInstanceSqlHaStandbyDetectionsCommand_base: {
  new (
    input: DisableInstanceSqlHaStandbyDetectionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DisableInstanceSqlHaStandbyDetectionsCommandInput,
    DisableInstanceSqlHaStandbyDetectionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DisableInstanceSqlHaStandbyDetectionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DisableInstanceSqlHaStandbyDetectionsCommandInput,
    DisableInstanceSqlHaStandbyDetectionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DisableInstanceSqlHaStandbyDetectionsCommand extends DisableInstanceSqlHaStandbyDetectionsCommand_base {
  protected static __types: {
    api: {
      input: DisableInstanceSqlHaStandbyDetectionsRequest;
      output: DisableInstanceSqlHaStandbyDetectionsResult;
    };
    sdk: {
      input: DisableInstanceSqlHaStandbyDetectionsCommandInput;
      output: DisableInstanceSqlHaStandbyDetectionsCommandOutput;
    };
  };
}
