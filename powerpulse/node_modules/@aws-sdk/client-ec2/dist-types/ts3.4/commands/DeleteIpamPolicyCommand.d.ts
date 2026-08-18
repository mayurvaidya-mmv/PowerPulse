import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteIpamPolicyRequest,
  DeleteIpamPolicyResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteIpamPolicyCommandInput extends DeleteIpamPolicyRequest {}
export interface DeleteIpamPolicyCommandOutput
  extends DeleteIpamPolicyResult,
    __MetadataBearer {}
declare const DeleteIpamPolicyCommand_base: {
  new (
    input: DeleteIpamPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteIpamPolicyCommandInput,
    DeleteIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteIpamPolicyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteIpamPolicyCommandInput,
    DeleteIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteIpamPolicyCommand extends DeleteIpamPolicyCommand_base {
  protected static __types: {
    api: {
      input: DeleteIpamPolicyRequest;
      output: DeleteIpamPolicyResult;
    };
    sdk: {
      input: DeleteIpamPolicyCommandInput;
      output: DeleteIpamPolicyCommandOutput;
    };
  };
}
