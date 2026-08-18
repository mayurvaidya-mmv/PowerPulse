import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteIpamPrefixListResolverRequest,
  DeleteIpamPrefixListResolverResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteIpamPrefixListResolverCommandInput
  extends DeleteIpamPrefixListResolverRequest {}
export interface DeleteIpamPrefixListResolverCommandOutput
  extends DeleteIpamPrefixListResolverResult,
    __MetadataBearer {}
declare const DeleteIpamPrefixListResolverCommand_base: {
  new (
    input: DeleteIpamPrefixListResolverCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteIpamPrefixListResolverCommandInput,
    DeleteIpamPrefixListResolverCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteIpamPrefixListResolverCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteIpamPrefixListResolverCommandInput,
    DeleteIpamPrefixListResolverCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteIpamPrefixListResolverCommand extends DeleteIpamPrefixListResolverCommand_base {
  protected static __types: {
    api: {
      input: DeleteIpamPrefixListResolverRequest;
      output: DeleteIpamPrefixListResolverResult;
    };
    sdk: {
      input: DeleteIpamPrefixListResolverCommandInput;
      output: DeleteIpamPrefixListResolverCommandOutput;
    };
  };
}
