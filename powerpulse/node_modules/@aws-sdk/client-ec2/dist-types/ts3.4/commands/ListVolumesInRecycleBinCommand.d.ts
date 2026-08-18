import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  ListVolumesInRecycleBinRequest,
  ListVolumesInRecycleBinResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface ListVolumesInRecycleBinCommandInput
  extends ListVolumesInRecycleBinRequest {}
export interface ListVolumesInRecycleBinCommandOutput
  extends ListVolumesInRecycleBinResult,
    __MetadataBearer {}
declare const ListVolumesInRecycleBinCommand_base: {
  new (
    input: ListVolumesInRecycleBinCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListVolumesInRecycleBinCommandInput,
    ListVolumesInRecycleBinCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [ListVolumesInRecycleBinCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    ListVolumesInRecycleBinCommandInput,
    ListVolumesInRecycleBinCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListVolumesInRecycleBinCommand extends ListVolumesInRecycleBinCommand_base {
  protected static __types: {
    api: {
      input: ListVolumesInRecycleBinRequest;
      output: ListVolumesInRecycleBinResult;
    };
    sdk: {
      input: ListVolumesInRecycleBinCommandInput;
      output: ListVolumesInRecycleBinCommandOutput;
    };
  };
}
