import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateSecondaryNetworkRequest,
  CreateSecondaryNetworkResult,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface CreateSecondaryNetworkCommandInput
  extends CreateSecondaryNetworkRequest {}
export interface CreateSecondaryNetworkCommandOutput
  extends CreateSecondaryNetworkResult,
    __MetadataBearer {}
declare const CreateSecondaryNetworkCommand_base: {
  new (
    input: CreateSecondaryNetworkCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateSecondaryNetworkCommandInput,
    CreateSecondaryNetworkCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateSecondaryNetworkCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateSecondaryNetworkCommandInput,
    CreateSecondaryNetworkCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateSecondaryNetworkCommand extends CreateSecondaryNetworkCommand_base {
  protected static __types: {
    api: {
      input: CreateSecondaryNetworkRequest;
      output: CreateSecondaryNetworkResult;
    };
    sdk: {
      input: CreateSecondaryNetworkCommandInput;
      output: CreateSecondaryNetworkCommandOutput;
    };
  };
}
