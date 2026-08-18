import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  GetActiveVpnTunnelStatusRequest,
  GetActiveVpnTunnelStatusResult,
} from "../models/models_5";
export { __MetadataBearer };
export { $Command };
export interface GetActiveVpnTunnelStatusCommandInput
  extends GetActiveVpnTunnelStatusRequest {}
export interface GetActiveVpnTunnelStatusCommandOutput
  extends GetActiveVpnTunnelStatusResult,
    __MetadataBearer {}
declare const GetActiveVpnTunnelStatusCommand_base: {
  new (
    input: GetActiveVpnTunnelStatusCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetActiveVpnTunnelStatusCommandInput,
    GetActiveVpnTunnelStatusCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: GetActiveVpnTunnelStatusCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetActiveVpnTunnelStatusCommandInput,
    GetActiveVpnTunnelStatusCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetActiveVpnTunnelStatusCommand extends GetActiveVpnTunnelStatusCommand_base {
  protected static __types: {
    api: {
      input: GetActiveVpnTunnelStatusRequest;
      output: GetActiveVpnTunnelStatusResult;
    };
    sdk: {
      input: GetActiveVpnTunnelStatusCommandInput;
      output: GetActiveVpnTunnelStatusCommandOutput;
    };
  };
}
