import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DisableIpamPolicyRequest,
  DisableIpamPolicyResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface DisableIpamPolicyCommandInput
  extends DisableIpamPolicyRequest {}
export interface DisableIpamPolicyCommandOutput
  extends DisableIpamPolicyResult,
    __MetadataBearer {}
declare const DisableIpamPolicyCommand_base: {
  new (
    input: DisableIpamPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DisableIpamPolicyCommandInput,
    DisableIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DisableIpamPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DisableIpamPolicyCommandInput,
    DisableIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DisableIpamPolicyCommand extends DisableIpamPolicyCommand_base {
  protected static __types: {
    api: {
      input: DisableIpamPolicyRequest;
      output: DisableIpamPolicyResult;
    };
    sdk: {
      input: DisableIpamPolicyCommandInput;
      output: DisableIpamPolicyCommandOutput;
    };
  };
}
