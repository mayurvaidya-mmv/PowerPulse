import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteIpamPrefixListResolverTargetRequest,
  DeleteIpamPrefixListResolverTargetResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteIpamPrefixListResolverTargetCommandInput
  extends DeleteIpamPrefixListResolverTargetRequest {}
export interface DeleteIpamPrefixListResolverTargetCommandOutput
  extends DeleteIpamPrefixListResolverTargetResult,
    __MetadataBearer {}
declare const DeleteIpamPrefixListResolverTargetCommand_base: {
  new (
    input: DeleteIpamPrefixListResolverTargetCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteIpamPrefixListResolverTargetCommandInput,
    DeleteIpamPrefixListResolverTargetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteIpamPrefixListResolverTargetCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteIpamPrefixListResolverTargetCommandInput,
    DeleteIpamPrefixListResolverTargetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteIpamPrefixListResolverTargetCommand extends DeleteIpamPrefixListResolverTargetCommand_base {
  protected static __types: {
    api: {
      input: DeleteIpamPrefixListResolverTargetRequest;
      output: DeleteIpamPrefixListResolverTargetResult;
    };
    sdk: {
      input: DeleteIpamPrefixListResolverTargetCommandInput;
      output: DeleteIpamPrefixListResolverTargetCommandOutput;
    };
  };
}
