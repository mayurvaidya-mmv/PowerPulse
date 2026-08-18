import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  ModifyIpamPolicyAllocationRulesRequest,
  ModifyIpamPolicyAllocationRulesResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface ModifyIpamPolicyAllocationRulesCommandInput
  extends ModifyIpamPolicyAllocationRulesRequest {}
export interface ModifyIpamPolicyAllocationRulesCommandOutput
  extends ModifyIpamPolicyAllocationRulesResult,
    __MetadataBearer {}
declare const ModifyIpamPolicyAllocationRulesCommand_base: {
  new (
    input: ModifyIpamPolicyAllocationRulesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyIpamPolicyAllocationRulesCommandInput,
    ModifyIpamPolicyAllocationRulesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ModifyIpamPolicyAllocationRulesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyIpamPolicyAllocationRulesCommandInput,
    ModifyIpamPolicyAllocationRulesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ModifyIpamPolicyAllocationRulesCommand extends ModifyIpamPolicyAllocationRulesCommand_base {
  protected static __types: {
    api: {
      input: ModifyIpamPolicyAllocationRulesRequest;
      output: ModifyIpamPolicyAllocationRulesResult;
    };
    sdk: {
      input: ModifyIpamPolicyAllocationRulesCommandInput;
      output: ModifyIpamPolicyAllocationRulesCommandOutput;
    };
  };
}
