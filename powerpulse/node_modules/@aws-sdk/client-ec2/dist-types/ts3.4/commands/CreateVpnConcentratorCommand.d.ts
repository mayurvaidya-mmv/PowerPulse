import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateVpnConcentratorRequest,
  CreateVpnConcentratorResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface CreateVpnConcentratorCommandInput
  extends CreateVpnConcentratorRequest {}
export interface CreateVpnConcentratorCommandOutput
  extends CreateVpnConcentratorResult,
    __MetadataBearer {}
declare const CreateVpnConcentratorCommand_base: {
  new (
    input: CreateVpnConcentratorCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateVpnConcentratorCommandInput,
    CreateVpnConcentratorCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateVpnConcentratorCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateVpnConcentratorCommandInput,
    CreateVpnConcentratorCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateVpnConcentratorCommand extends CreateVpnConcentratorCommand_base {
  protected static __types: {
    api: {
      input: CreateVpnConcentratorRequest;
      output: CreateVpnConcentratorResult;
    };
    sdk: {
      input: CreateVpnConcentratorCommandInput;
      output: CreateVpnConcentratorCommandOutput;
    };
  };
}
