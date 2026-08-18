import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  ModifyPublicIpDnsNameOptionsRequest,
  ModifyPublicIpDnsNameOptionsResult,
} from "../models/models_6";
export { __MetadataBearer };
export { $Command };
export interface ModifyPublicIpDnsNameOptionsCommandInput
  extends ModifyPublicIpDnsNameOptionsRequest {}
export interface ModifyPublicIpDnsNameOptionsCommandOutput
  extends ModifyPublicIpDnsNameOptionsResult,
    __MetadataBearer {}
declare const ModifyPublicIpDnsNameOptionsCommand_base: {
  new (
    input: ModifyPublicIpDnsNameOptionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyPublicIpDnsNameOptionsCommandInput,
    ModifyPublicIpDnsNameOptionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: ModifyPublicIpDnsNameOptionsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ModifyPublicIpDnsNameOptionsCommandInput,
    ModifyPublicIpDnsNameOptionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ModifyPublicIpDnsNameOptionsCommand extends ModifyPublicIpDnsNameOptionsCommand_base {
  protected static __types: {
    api: {
      input: ModifyPublicIpDnsNameOptionsRequest;
      output: ModifyPublicIpDnsNameOptionsResult;
    };
    sdk: {
      input: ModifyPublicIpDnsNameOptionsCommandInput;
      output: ModifyPublicIpDnsNameOptionsCommandOutput;
    };
  };
}
