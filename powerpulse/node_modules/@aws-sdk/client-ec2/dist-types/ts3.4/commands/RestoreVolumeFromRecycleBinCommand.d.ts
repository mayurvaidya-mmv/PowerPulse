import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  RestoreVolumeFromRecycleBinRequest,
  RestoreVolumeFromRecycleBinResult,
} from "../models/models_7";
export { __MetadataBearer };
export { $Command };
export interface RestoreVolumeFromRecycleBinCommandInput
  extends RestoreVolumeFromRecycleBinRequest {}
export interface RestoreVolumeFromRecycleBinCommandOutput
  extends RestoreVolumeFromRecycleBinResult,
    __MetadataBearer {}
declare const RestoreVolumeFromRecycleBinCommand_base: {
  new (
    input: RestoreVolumeFromRecycleBinCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RestoreVolumeFromRecycleBinCommandInput,
    RestoreVolumeFromRecycleBinCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: RestoreVolumeFromRecycleBinCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RestoreVolumeFromRecycleBinCommandInput,
    RestoreVolumeFromRecycleBinCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RestoreVolumeFromRecycleBinCommand extends RestoreVolumeFromRecycleBinCommand_base {
  protected static __types: {
    api: {
      input: RestoreVolumeFromRecycleBinRequest;
      output: RestoreVolumeFromRecycleBinResult;
    };
    sdk: {
      input: RestoreVolumeFromRecycleBinCommandInput;
      output: RestoreVolumeFromRecycleBinCommandOutput;
    };
  };
}
