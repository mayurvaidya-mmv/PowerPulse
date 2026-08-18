import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetEnabledIpamPolicyRequest,
  GetEnabledIpamPolicyResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface GetEnabledIpamPolicyCommandInput
  extends GetEnabledIpamPolicyRequest {}
export interface GetEnabledIpamPolicyCommandOutput
  extends GetEnabledIpamPolicyResult,
    __MetadataBearer {}
declare const GetEnabledIpamPolicyCommand_base: {
  new (
    input: GetEnabledIpamPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetEnabledIpamPolicyCommandInput,
    GetEnabledIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [GetEnabledIpamPolicyCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    GetEnabledIpamPolicyCommandInput,
    GetEnabledIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetEnabledIpamPolicyCommand extends GetEnabledIpamPolicyCommand_base {
  protected static __types: {
    api: {
      input: GetEnabledIpamPolicyRequest;
      output: GetEnabledIpamPolicyResult;
    };
    sdk: {
      input: GetEnabledIpamPolicyCommandInput;
      output: GetEnabledIpamPolicyCommandOutput;
    };
  };
}
