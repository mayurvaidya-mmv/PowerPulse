import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateIpamPrefixListResolverTargetRequest,
  CreateIpamPrefixListResolverTargetResult,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface CreateIpamPrefixListResolverTargetCommandInput
  extends CreateIpamPrefixListResolverTargetRequest {}
export interface CreateIpamPrefixListResolverTargetCommandOutput
  extends CreateIpamPrefixListResolverTargetResult,
    __MetadataBearer {}
declare const CreateIpamPrefixListResolverTargetCommand_base: {
  new (
    input: CreateIpamPrefixListResolverTargetCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateIpamPrefixListResolverTargetCommandInput,
    CreateIpamPrefixListResolverTargetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateIpamPrefixListResolverTargetCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateIpamPrefixListResolverTargetCommandInput,
    CreateIpamPrefixListResolverTargetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateIpamPrefixListResolverTargetCommand extends CreateIpamPrefixListResolverTargetCommand_base {
  protected static __types: {
    api: {
      input: CreateIpamPrefixListResolverTargetRequest;
      output: CreateIpamPrefixListResolverTargetResult;
    };
    sdk: {
      input: CreateIpamPrefixListResolverTargetCommandInput;
      output: CreateIpamPrefixListResolverTargetCommandOutput;
    };
  };
}
