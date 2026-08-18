import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetIpamPrefixListResolverVersionEntriesRequest,
  GetIpamPrefixListResolverVersionEntriesResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface GetIpamPrefixListResolverVersionEntriesCommandInput
  extends GetIpamPrefixListResolverVersionEntriesRequest {}
export interface GetIpamPrefixListResolverVersionEntriesCommandOutput
  extends GetIpamPrefixListResolverVersionEntriesResult,
    __MetadataBearer {}
declare const GetIpamPrefixListResolverVersionEntriesCommand_base: {
  new (
    input: GetIpamPrefixListResolverVersionEntriesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetIpamPrefixListResolverVersionEntriesCommandInput,
    GetIpamPrefixListResolverVersionEntriesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetIpamPrefixListResolverVersionEntriesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetIpamPrefixListResolverVersionEntriesCommandInput,
    GetIpamPrefixListResolverVersionEntriesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetIpamPrefixListResolverVersionEntriesCommand extends GetIpamPrefixListResolverVersionEntriesCommand_base {
  protected static __types: {
    api: {
      input: GetIpamPrefixListResolverVersionEntriesRequest;
      output: GetIpamPrefixListResolverVersionEntriesResult;
    };
    sdk: {
      input: GetIpamPrefixListResolverVersionEntriesCommandInput;
      output: GetIpamPrefixListResolverVersionEntriesCommandOutput;
    };
  };
}
