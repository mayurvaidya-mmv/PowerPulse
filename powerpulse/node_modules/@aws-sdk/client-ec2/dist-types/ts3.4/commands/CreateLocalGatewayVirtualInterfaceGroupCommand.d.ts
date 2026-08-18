import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateLocalGatewayVirtualInterfaceGroupRequest,
  CreateLocalGatewayVirtualInterfaceGroupResult,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface CreateLocalGatewayVirtualInterfaceGroupCommandInput
  extends CreateLocalGatewayVirtualInterfaceGroupRequest {}
export interface CreateLocalGatewayVirtualInterfaceGroupCommandOutput
  extends CreateLocalGatewayVirtualInterfaceGroupResult,
    __MetadataBearer {}
declare const CreateLocalGatewayVirtualInterfaceGroupCommand_base: {
  new (
    input: CreateLocalGatewayVirtualInterfaceGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateLocalGatewayVirtualInterfaceGroupCommandInput,
    CreateLocalGatewayVirtualInterfaceGroupCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateLocalGatewayVirtualInterfaceGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateLocalGatewayVirtualInterfaceGroupCommandInput,
    CreateLocalGatewayVirtualInterfaceGroupCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateLocalGatewayVirtualInterfaceGroupCommand extends CreateLocalGatewayVirtualInterfaceGroupCommand_base {
  protected static __types: {
    api: {
      input: CreateLocalGatewayVirtualInterfaceGroupRequest;
      output: CreateLocalGatewayVirtualInterfaceGroupResult;
    };
    sdk: {
      input: CreateLocalGatewayVirtualInterfaceGroupCommandInput;
      output: CreateLocalGatewayVirtualInterfaceGroupCommandOutput;
    };
  };
}
