import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import { DeleteNetworkAclEntryRequest } from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteNetworkAclEntryCommandInput
  extends DeleteNetworkAclEntryRequest {}
export interface DeleteNetworkAclEntryCommandOutput extends __MetadataBearer {}
declare const DeleteNetworkAclEntryCommand_base: {
  new (
    input: DeleteNetworkAclEntryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteNetworkAclEntryCommandInput,
    DeleteNetworkAclEntryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteNetworkAclEntryCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteNetworkAclEntryCommandInput,
    DeleteNetworkAclEntryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteNetworkAclEntryCommand extends DeleteNetworkAclEntryCommand_base {
  protected static __types: {
    api: {
      input: DeleteNetworkAclEntryRequest;
      output: {};
    };
    sdk: {
      input: DeleteNetworkAclEntryCommandInput;
      output: DeleteNetworkAclEntryCommandOutput;
    };
  };
}
