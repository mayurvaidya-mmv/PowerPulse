import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DeleteLocalGatewayVirtualInterfaceRequest,
  DeleteLocalGatewayVirtualInterfaceResult,
} from "../models/models_2";
export { __MetadataBearer };
export { $Command };
export interface DeleteLocalGatewayVirtualInterfaceCommandInput
  extends DeleteLocalGatewayVirtualInterfaceRequest {}
export interface DeleteLocalGatewayVirtualInterfaceCommandOutput
  extends DeleteLocalGatewayVirtualInterfaceResult,
    __MetadataBearer {}
declare const DeleteLocalGatewayVirtualInterfaceCommand_base: {
  new (
    input: DeleteLocalGatewayVirtualInterfaceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteLocalGatewayVirtualInterfaceCommandInput,
    DeleteLocalGatewayVirtualInterfaceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: DeleteLocalGatewayVirtualInterfaceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DeleteLocalGatewayVirtualInterfaceCommandInput,
    DeleteLocalGatewayVirtualInterfaceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DeleteLocalGatewayVirtualInterfaceCommand extends DeleteLocalGatewayVirtualInterfaceCommand_base {
  protected static __types: {
    api: {
      input: DeleteLocalGatewayVirtualInterfaceRequest;
      output: DeleteLocalGatewayVirtualInterfaceResult;
    };
    sdk: {
      input: DeleteLocalGatewayVirtualInterfaceCommandInput;
      output: DeleteLocalGatewayVirtualInterfaceCommandOutput;
    };
  };
}
