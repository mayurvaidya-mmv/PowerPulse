import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  ModifyIpamPrefixListResolverTargetRequest,
  ModifyIpamPrefixListResolverTargetResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface ModifyIpamPrefixListResolverTargetCommandInput
  extends ModifyIpamPrefixListResolverTargetRequest {}
export interface ModifyIpamPrefixListResolverTargetCommandOutput
  extends ModifyIpamPrefixListResolverTargetResult,
    __MetadataBearer {}
declare const ModifyIpamPrefixListResolverTargetCommand_base: {
  new (
    input: ModifyIpamPrefixListResolverTargetCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyIpamPrefixListResolverTargetCommandInput,
    ModifyIpamPrefixListResolverTargetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ModifyIpamPrefixListResolverTargetCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyIpamPrefixListResolverTargetCommandInput,
    ModifyIpamPrefixListResolverTargetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ModifyIpamPrefixListResolverTargetCommand extends ModifyIpamPrefixListResolverTargetCommand_base {
  protected static __types: {
    api: {
      input: ModifyIpamPrefixListResolverTargetRequest;
      output: ModifyIpamPrefixListResolverTargetResult;
    };
    sdk: {
      input: ModifyIpamPrefixListResolverTargetCommandInput;
      output: ModifyIpamPrefixListResolverTargetCommandOutput;
    };
  };
}
