import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import { CopyVolumesRequest, CopyVolumesResult } from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CopyVolumesCommandInput extends CopyVolumesRequest {}
export interface CopyVolumesCommandOutput
  extends CopyVolumesResult,
    __MetadataBearer {}
declare const CopyVolumesCommand_base: {
  new (
    input: CopyVolumesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CopyVolumesCommandInput,
    CopyVolumesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CopyVolumesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CopyVolumesCommandInput,
    CopyVolumesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CopyVolumesCommand extends CopyVolumesCommand_base {
  protected static __types: {
    api: {
      input: CopyVolumesRequest;
      output: CopyVolumesResult;
    };
    sdk: {
      input: CopyVolumesCommandInput;
      output: CopyVolumesCommandOutput;
    };
  };
}
