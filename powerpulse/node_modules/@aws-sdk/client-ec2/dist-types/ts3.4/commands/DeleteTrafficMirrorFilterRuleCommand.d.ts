import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteTrafficMirrorFilterRuleRequest,
  DeleteTrafficMirrorFilterRuleResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteTrafficMirrorFilterRuleCommandInput
  extends DeleteTrafficMirrorFilterRuleRequest {}
export interface DeleteTrafficMirrorFilterRuleCommandOutput
  extends DeleteTrafficMirrorFilterRuleResult,
    __MetadataBearer {}
declare const DeleteTrafficMirrorFilterRuleCommand_base: {
  new (
    input: DeleteTrafficMirrorFilterRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteTrafficMirrorFilterRuleCommandInput,
    DeleteTrafficMirrorFilterRuleCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteTrafficMirrorFilterRuleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteTrafficMirrorFilterRuleCommandInput,
    DeleteTrafficMirrorFilterRuleCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteTrafficMirrorFilterRuleCommand extends DeleteTrafficMirrorFilterRuleCommand_base {
  protected static __types: {
    api: {
      input: DeleteTrafficMirrorFilterRuleRequest;
      output: DeleteTrafficMirrorFilterRuleResult;
    };
    sdk: {
      input: DeleteTrafficMirrorFilterRuleCommandInput;
      output: DeleteTrafficMirrorFilterRuleCommandOutput;
    };
  };
}
