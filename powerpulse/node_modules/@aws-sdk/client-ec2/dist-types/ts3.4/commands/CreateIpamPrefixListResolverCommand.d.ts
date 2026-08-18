import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateIpamPrefixListResolverRequest,
  CreateIpamPrefixListResolverResult,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface CreateIpamPrefixListResolverCommandInput
  extends CreateIpamPrefixListResolverRequest {}
export interface CreateIpamPrefixListResolverCommandOutput
  extends CreateIpamPrefixListResolverResult,
    __MetadataBearer {}
declare const CreateIpamPrefixListResolverCommand_base: {
  new (
    input: CreateIpamPrefixListResolverCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateIpamPrefixListResolverCommandInput,
    CreateIpamPrefixListResolverCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateIpamPrefixListResolverCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateIpamPrefixListResolverCommandInput,
    CreateIpamPrefixListResolverCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateIpamPrefixListResolverCommand extends CreateIpamPrefixListResolverCommand_base {
  protected static __types: {
    api: {
      input: CreateIpamPrefixListResolverRequest;
      output: CreateIpamPrefixListResolverResult;
    };
    sdk: {
      input: CreateIpamPrefixListResolverCommandInput;
      output: CreateIpamPrefixListResolverCommandOutput;
    };
  };
}
