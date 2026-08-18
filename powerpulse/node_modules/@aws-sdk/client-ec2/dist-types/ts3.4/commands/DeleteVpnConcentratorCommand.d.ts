import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteVpnConcentratorRequest,
  DeleteVpnConcentratorResult,
} from "../models/models_3";
export { __MetadataBearer };
export { $Command };
export interface DeleteVpnConcentratorCommandInput
  extends DeleteVpnConcentratorRequest {}
export interface DeleteVpnConcentratorCommandOutput
  extends DeleteVpnConcentratorResult,
    __MetadataBearer {}
declare const DeleteVpnConcentratorCommand_base: {
  new (
    input: DeleteVpnConcentratorCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteVpnConcentratorCommandInput,
    DeleteVpnConcentratorCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteVpnConcentratorCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteVpnConcentratorCommandInput,
    DeleteVpnConcentratorCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteVpnConcentratorCommand extends DeleteVpnConcentratorCommand_base {
  protected static __types: {
    api: {
      input: DeleteVpnConcentratorRequest;
      output: DeleteVpnConcentratorResult;
    };
    sdk: {
      input: DeleteVpnConcentratorCommandInput;
      output: DeleteVpnConcentratorCommandOutput;
    };
  };
}
