import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteCapacityManagerDataExportRequest,
  DeleteCapacityManagerDataExportResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteCapacityManagerDataExportCommandInput
  extends DeleteCapacityManagerDataExportRequest {}
export interface DeleteCapacityManagerDataExportCommandOutput
  extends DeleteCapacityManagerDataExportResult,
    __MetadataBearer {}
declare const DeleteCapacityManagerDataExportCommand_base: {
  new (
    input: DeleteCapacityManagerDataExportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteCapacityManagerDataExportCommandInput,
    DeleteCapacityManagerDataExportCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteCapacityManagerDataExportCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteCapacityManagerDataExportCommandInput,
    DeleteCapacityManagerDataExportCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteCapacityManagerDataExportCommand extends DeleteCapacityManagerDataExportCommand_base {
  protected static __types: {
    api: {
      input: DeleteCapacityManagerDataExportRequest;
      output: DeleteCapacityManagerDataExportResult;
    };
    sdk: {
      input: DeleteCapacityManagerDataExportCommandInput;
      output: DeleteCapacityManagerDataExportCommandOutput;
    };
  };
}
