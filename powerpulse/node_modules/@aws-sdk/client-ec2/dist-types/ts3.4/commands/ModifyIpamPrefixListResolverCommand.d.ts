import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  ModifyIpamPrefixListResolverRequest,
  ModifyIpamPrefixListResolverResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface ModifyIpamPrefixListResolverCommandInput
  extends ModifyIpamPrefixListResolverRequest {}
export interface ModifyIpamPrefixListResolverCommandOutput
  extends ModifyIpamPrefixListResolverResult,
    __MetadataBearer {}
declare const ModifyIpamPrefixListResolverCommand_base: {
  new (
    input: ModifyIpamPrefixListResolverCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyIpamPrefixListResolverCommandInput,
    ModifyIpamPrefixListResolverCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ModifyIpamPrefixListResolverCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyIpamPrefixListResolverCommandInput,
    ModifyIpamPrefixListResolverCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ModifyIpamPrefixListResolverCommand extends ModifyIpamPrefixListResolverCommand_base {
  protected static __types: {
    api: {
      input: ModifyIpamPrefixListResolverRequest;
      output: ModifyIpamPrefixListResolverResult;
    };
    sdk: {
      input: ModifyIpamPrefixListResolverCommandInput;
      output: ModifyIpamPrefixListResolverCommandOutput;
    };
  };
}
