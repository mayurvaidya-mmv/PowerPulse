import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetIpamPrefixListResolverVersionsRequest,
  GetIpamPrefixListResolverVersionsResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface GetIpamPrefixListResolverVersionsCommandInput
  extends GetIpamPrefixListResolverVersionsRequest {}
export interface GetIpamPrefixListResolverVersionsCommandOutput
  extends GetIpamPrefixListResolverVersionsResult,
    __MetadataBearer {}
declare const GetIpamPrefixListResolverVersionsCommand_base: {
  new (
    input: GetIpamPrefixListResolverVersionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetIpamPrefixListResolverVersionsCommandInput,
    GetIpamPrefixListResolverVersionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetIpamPrefixListResolverVersionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetIpamPrefixListResolverVersionsCommandInput,
    GetIpamPrefixListResolverVersionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetIpamPrefixListResolverVersionsCommand extends GetIpamPrefixListResolverVersionsCommand_base {
  protected static __types: {
    api: {
      input: GetIpamPrefixListResolverVersionsRequest;
      output: GetIpamPrefixListResolverVersionsResult;
    };
    sdk: {
      input: GetIpamPrefixListResolverVersionsCommandInput;
      output: GetIpamPrefixListResolverVersionsCommandOutput;
    };
  };
}
