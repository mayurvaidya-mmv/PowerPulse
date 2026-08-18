import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetIpamPolicyAllocationRulesRequest,
  GetIpamPolicyAllocationRulesResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface GetIpamPolicyAllocationRulesCommandInput
  extends GetIpamPolicyAllocationRulesRequest {}
export interface GetIpamPolicyAllocationRulesCommandOutput
  extends GetIpamPolicyAllocationRulesResult,
    __MetadataBearer {}
declare const GetIpamPolicyAllocationRulesCommand_base: {
  new (
    input: GetIpamPolicyAllocationRulesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetIpamPolicyAllocationRulesCommandInput,
    GetIpamPolicyAllocationRulesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetIpamPolicyAllocationRulesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetIpamPolicyAllocationRulesCommandInput,
    GetIpamPolicyAllocationRulesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetIpamPolicyAllocationRulesCommand extends GetIpamPolicyAllocationRulesCommand_base {
  protected static __types: {
    api: {
      input: GetIpamPolicyAllocationRulesRequest;
      output: GetIpamPolicyAllocationRulesResult;
    };
    sdk: {
      input: GetIpamPolicyAllocationRulesCommandInput;
      output: GetIpamPolicyAllocationRulesCommandOutput;
    };
  };
}
