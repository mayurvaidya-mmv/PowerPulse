import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetIpamPrefixListResolverRulesRequest,
  GetIpamPrefixListResolverRulesResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface GetIpamPrefixListResolverRulesCommandInput
  extends GetIpamPrefixListResolverRulesRequest {}
export interface GetIpamPrefixListResolverRulesCommandOutput
  extends GetIpamPrefixListResolverRulesResult,
    __MetadataBearer {}
declare const GetIpamPrefixListResolverRulesCommand_base: {
  new (
    input: GetIpamPrefixListResolverRulesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetIpamPrefixListResolverRulesCommandInput,
    GetIpamPrefixListResolverRulesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetIpamPrefixListResolverRulesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetIpamPrefixListResolverRulesCommandInput,
    GetIpamPrefixListResolverRulesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetIpamPrefixListResolverRulesCommand extends GetIpamPrefixListResolverRulesCommand_base {
  protected static __types: {
    api: {
      input: GetIpamPrefixListResolverRulesRequest;
      output: GetIpamPrefixListResolverRulesResult;
    };
    sdk: {
      input: GetIpamPrefixListResolverRulesCommandInput;
      output: GetIpamPrefixListResolverRulesCommandOutput;
    };
  };
}
