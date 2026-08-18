import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  UpdateCapacityManagerOrganizationsAccessRequest,
  UpdateCapacityManagerOrganizationsAccessResult,
} from "../models/models_7";
export { __MetadataBearer };
export { $Command };
export interface UpdateCapacityManagerOrganizationsAccessCommandInput
  extends UpdateCapacityManagerOrganizationsAccessRequest {}
export interface UpdateCapacityManagerOrganizationsAccessCommandOutput
  extends UpdateCapacityManagerOrganizationsAccessResult,
    __MetadataBearer {}
declare const UpdateCapacityManagerOrganizationsAccessCommand_base: {
  new (
    input: UpdateCapacityManagerOrganizationsAccessCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateCapacityManagerOrganizationsAccessCommandInput,
    UpdateCapacityManagerOrganizationsAccessCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateCapacityManagerOrganizationsAccessCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateCapacityManagerOrganizationsAccessCommandInput,
    UpdateCapacityManagerOrganizationsAccessCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateCapacityManagerOrganizationsAccessCommand extends UpdateCapacityManagerOrganizationsAccessCommand_base {
  protected static __types: {
    api: {
      input: UpdateCapacityManagerOrganizationsAccessRequest;
      output: UpdateCapacityManagerOrganizationsAccessResult;
    };
    sdk: {
      input: UpdateCapacityManagerOrganizationsAccessCommandInput;
      output: UpdateCapacityManagerOrganizationsAccessCommandOutput;
    };
  };
}
