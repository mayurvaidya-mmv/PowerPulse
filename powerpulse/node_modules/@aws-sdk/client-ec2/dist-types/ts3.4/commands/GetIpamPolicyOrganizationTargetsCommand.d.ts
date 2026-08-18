import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetIpamPolicyOrganizationTargetsRequest,
  GetIpamPolicyOrganizationTargetsResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface GetIpamPolicyOrganizationTargetsCommandInput
  extends GetIpamPolicyOrganizationTargetsRequest {}
export interface GetIpamPolicyOrganizationTargetsCommandOutput
  extends GetIpamPolicyOrganizationTargetsResult,
    __MetadataBearer {}
declare const GetIpamPolicyOrganizationTargetsCommand_base: {
  new (
    input: GetIpamPolicyOrganizationTargetsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetIpamPolicyOrganizationTargetsCommandInput,
    GetIpamPolicyOrganizationTargetsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetIpamPolicyOrganizationTargetsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetIpamPolicyOrganizationTargetsCommandInput,
    GetIpamPolicyOrganizationTargetsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetIpamPolicyOrganizationTargetsCommand extends GetIpamPolicyOrganizationTargetsCommand_base {
  protected static __types: {
    api: {
      input: GetIpamPolicyOrganizationTargetsRequest;
      output: GetIpamPolicyOrganizationTargetsResult;
    };
    sdk: {
      input: GetIpamPolicyOrganizationTargetsCommandInput;
      output: GetIpamPolicyOrganizationTargetsCommandOutput;
    };
  };
}
