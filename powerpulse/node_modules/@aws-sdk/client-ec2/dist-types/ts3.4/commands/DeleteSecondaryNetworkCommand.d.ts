import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteSecondaryNetworkRequest,
  DeleteSecondaryNetworkResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteSecondaryNetworkCommandInput
  extends DeleteSecondaryNetworkRequest {}
export interface DeleteSecondaryNetworkCommandOutput
  extends DeleteSecondaryNetworkResult,
    __MetadataBearer {}
declare const DeleteSecondaryNetworkCommand_base: {
  new (
    input: DeleteSecondaryNetworkCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteSecondaryNetworkCommandInput,
    DeleteSecondaryNetworkCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteSecondaryNetworkCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteSecondaryNetworkCommandInput,
    DeleteSecondaryNetworkCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteSecondaryNetworkCommand extends DeleteSecondaryNetworkCommand_base {
  protected static __types: {
    api: {
      input: DeleteSecondaryNetworkRequest;
      output: DeleteSecondaryNetworkResult;
    };
    sdk: {
      input: DeleteSecondaryNetworkCommandInput;
      output: DeleteSecondaryNetworkCommandOutput;
    };
  };
}
