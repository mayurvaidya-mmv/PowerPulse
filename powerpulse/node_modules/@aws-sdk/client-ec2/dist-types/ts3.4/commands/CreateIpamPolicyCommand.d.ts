import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateIpamPolicyRequest,
  CreateIpamPolicyResult,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface CreateIpamPolicyCommandInput extends CreateIpamPolicyRequest {}
export interface CreateIpamPolicyCommandOutput
  extends CreateIpamPolicyResult,
    __MetadataBearer {}
declare const CreateIpamPolicyCommand_base: {
  new (
    input: CreateIpamPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateIpamPolicyCommandInput,
    CreateIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateIpamPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateIpamPolicyCommandInput,
    CreateIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateIpamPolicyCommand extends CreateIpamPolicyCommand_base {
  protected static __types: {
    api: {
      input: CreateIpamPolicyRequest;
      output: CreateIpamPolicyResult;
    };
    sdk: {
      input: CreateIpamPolicyCommandInput;
      output: CreateIpamPolicyCommandOutput;
    };
  };
}
