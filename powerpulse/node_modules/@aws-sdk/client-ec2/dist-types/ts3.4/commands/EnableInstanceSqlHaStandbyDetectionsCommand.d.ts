import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  EnableInstanceSqlHaStandbyDetectionsRequest,
  EnableInstanceSqlHaStandbyDetectionsResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface EnableInstanceSqlHaStandbyDetectionsCommandInput
  extends EnableInstanceSqlHaStandbyDetectionsRequest {}
export interface EnableInstanceSqlHaStandbyDetectionsCommandOutput
  extends EnableInstanceSqlHaStandbyDetectionsResult,
    __MetadataBearer {}
declare const EnableInstanceSqlHaStandbyDetectionsCommand_base: {
  new (
    input: EnableInstanceSqlHaStandbyDetectionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    EnableInstanceSqlHaStandbyDetectionsCommandInput,
    EnableInstanceSqlHaStandbyDetectionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: EnableInstanceSqlHaStandbyDetectionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    EnableInstanceSqlHaStandbyDetectionsCommandInput,
    EnableInstanceSqlHaStandbyDetectionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class EnableInstanceSqlHaStandbyDetectionsCommand extends EnableInstanceSqlHaStandbyDetectionsCommand_base {
  protected static __types: {
    api: {
      input: EnableInstanceSqlHaStandbyDetectionsRequest;
      output: EnableInstanceSqlHaStandbyDetectionsResult;
    };
    sdk: {
      input: EnableInstanceSqlHaStandbyDetectionsCommandInput;
      output: EnableInstanceSqlHaStandbyDetectionsCommandOutput;
    };
  };
}
