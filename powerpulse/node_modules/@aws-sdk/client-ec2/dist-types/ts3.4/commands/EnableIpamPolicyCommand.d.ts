import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  EnableIpamPolicyRequest,
  EnableIpamPolicyResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface EnableIpamPolicyCommandInput extends EnableIpamPolicyRequest {}
export interface EnableIpamPolicyCommandOutput
  extends EnableIpamPolicyResult,
    __MetadataBearer {}
declare const EnableIpamPolicyCommand_base: {
  new (
    input: EnableIpamPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    EnableIpamPolicyCommandInput,
    EnableIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: EnableIpamPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    EnableIpamPolicyCommandInput,
    EnableIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class EnableIpamPolicyCommand extends EnableIpamPolicyCommand_base {
  protected static __types: {
    api: {
      input: EnableIpamPolicyRequest;
      output: EnableIpamPolicyResult;
    };
    sdk: {
      input: EnableIpamPolicyCommandInput;
      output: EnableIpamPolicyCommandOutput;
    };
  };
}
