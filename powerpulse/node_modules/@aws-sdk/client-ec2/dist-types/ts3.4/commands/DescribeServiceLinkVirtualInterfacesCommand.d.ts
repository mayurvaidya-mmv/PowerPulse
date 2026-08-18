import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeServiceLinkVirtualInterfacesRequest,
  DescribeServiceLinkVirtualInterfacesResult,
} from "../models/models_4";
export { __MetadataBearer };
export { $Command };
export interface DescribeServiceLinkVirtualInterfacesCommandInput
  extends DescribeServiceLinkVirtualInterfacesRequest {}
export interface DescribeServiceLinkVirtualInterfacesCommandOutput
  extends DescribeServiceLinkVirtualInterfacesResult,
    __MetadataBearer {}
declare const DescribeServiceLinkVirtualInterfacesCommand_base: {
  new (
    input: DescribeServiceLinkVirtualInterfacesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeServiceLinkVirtualInterfacesCommandInput,
    DescribeServiceLinkVirtualInterfacesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeServiceLinkVirtualInterfacesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeServiceLinkVirtualInterfacesCommandInput,
    DescribeServiceLinkVirtualInterfacesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeServiceLinkVirtualInterfacesCommand extends DescribeServiceLinkVirtualInterfacesCommand_base {
  protected static __types: {
    api: {
      input: DescribeServiceLinkVirtualInterfacesRequest;
      output: DescribeServiceLinkVirtualInterfacesResult;
    };
    sdk: {
      input: DescribeServiceLinkVirtualInterfacesCommandInput;
      output: DescribeServiceLinkVirtualInterfacesCommandOutput;
    };
  };
}
