import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteLocalGatewayVirtualInterfaceGroupRequest,
  DeleteLocalGatewayVirtualInterfaceGroupResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteLocalGatewayVirtualInterfaceGroupCommandInput
  extends DeleteLocalGatewayVirtualInterfaceGroupRequest {}
export interface DeleteLocalGatewayVirtualInterfaceGroupCommandOutput
  extends DeleteLocalGatewayVirtualInterfaceGroupResult,
    __MetadataBearer {}
declare const DeleteLocalGatewayVirtualInterfaceGroupCommand_base: {
  new (
    input: DeleteLocalGatewayVirtualInterfaceGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteLocalGatewayVirtualInterfaceGroupCommandInput,
    DeleteLocalGatewayVirtualInterfaceGroupCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteLocalGatewayVirtualInterfaceGroupCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteLocalGatewayVirtualInterfaceGroupCommandInput,
    DeleteLocalGatewayVirtualInterfaceGroupCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteLocalGatewayVirtualInterfaceGroupCommand extends DeleteLocalGatewayVirtualInterfaceGroupCommand_base {
  protected static __types: {
    api: {
      input: DeleteLocalGatewayVirtualInterfaceGroupRequest;
      output: DeleteLocalGatewayVirtualInterfaceGroupResult;
    };
    sdk: {
      input: DeleteLocalGatewayVirtualInterfaceGroupCommandInput;
      output: DeleteLocalGatewayVirtualInterfaceGroupCommandOutput;
    };
  };
}
