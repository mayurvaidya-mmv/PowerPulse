import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetVpcResourcesBlockingEncryptionEnforcementRequest,
  GetVpcResourcesBlockingEncryptionEnforcementResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface GetVpcResourcesBlockingEncryptionEnforcementCommandInput
  extends GetVpcResourcesBlockingEncryptionEnforcementRequest {}
export interface GetVpcResourcesBlockingEncryptionEnforcementCommandOutput
  extends GetVpcResourcesBlockingEncryptionEnforcementResult,
    __MetadataBearer {}
declare const GetVpcResourcesBlockingEncryptionEnforcementCommand_base: {
  new (
    input: GetVpcResourcesBlockingEncryptionEnforcementCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetVpcResourcesBlockingEncryptionEnforcementCommandInput,
    GetVpcResourcesBlockingEncryptionEnforcementCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetVpcResourcesBlockingEncryptionEnforcementCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetVpcResourcesBlockingEncryptionEnforcementCommandInput,
    GetVpcResourcesBlockingEncryptionEnforcementCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetVpcResourcesBlockingEncryptionEnforcementCommand extends GetVpcResourcesBlockingEncryptionEnforcementCommand_base {
  protected static __types: {
    api: {
      input: GetVpcResourcesBlockingEncryptionEnforcementRequest;
      output: GetVpcResourcesBlockingEncryptionEnforcementResult;
    };
    sdk: {
      input: GetVpcResourcesBlockingEncryptionEnforcementCommandInput;
      output: GetVpcResourcesBlockingEncryptionEnforcementCommandOutput;
    };
  };
}
