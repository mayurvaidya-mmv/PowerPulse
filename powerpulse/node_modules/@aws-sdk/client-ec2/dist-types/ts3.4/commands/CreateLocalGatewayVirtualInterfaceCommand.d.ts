import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateLocalGatewayVirtualInterfaceRequest,
  CreateLocalGatewayVirtualInterfaceResult,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface CreateLocalGatewayVirtualInterfaceCommandInput
  extends CreateLocalGatewayVirtualInterfaceRequest {}
export interface CreateLocalGatewayVirtualInterfaceCommandOutput
  extends CreateLocalGatewayVirtualInterfaceResult,
    __MetadataBearer {}
declare const CreateLocalGatewayVirtualInterfaceCommand_base: {
  new (
    input: CreateLocalGatewayVirtualInterfaceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateLocalGatewayVirtualInterfaceCommandInput,
    CreateLocalGatewayVirtualInterfaceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateLocalGatewayVirtualInterfaceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateLocalGatewayVirtualInterfaceCommandInput,
    CreateLocalGatewayVirtualInterfaceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateLocalGatewayVirtualInterfaceCommand extends CreateLocalGatewayVirtualInterfaceCommand_base {
  protected static __types: {
    api: {
      input: CreateLocalGatewayVirtualInterfaceRequest;
      output: CreateLocalGatewayVirtualInterfaceResult;
    };
    sdk: {
      input: CreateLocalGatewayVirtualInterfaceCommandInput;
      output: CreateLocalGatewayVirtualInterfaceCommandOutput;
    };
  };
}
