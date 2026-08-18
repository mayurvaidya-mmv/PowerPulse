import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeSecondaryInterfacesRequest,
  DescribeSecondaryInterfacesResult,
} from "../models/models_4";
export { __MetadataBearer };
export { $Command };
export interface DescribeSecondaryInterfacesCommandInput
  extends DescribeSecondaryInterfacesRequest {}
export interface DescribeSecondaryInterfacesCommandOutput
  extends DescribeSecondaryInterfacesResult,
    __MetadataBearer {}
declare const DescribeSecondaryInterfacesCommand_base: {
  new (
    input: DescribeSecondaryInterfacesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeSecondaryInterfacesCommandInput,
    DescribeSecondaryInterfacesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeSecondaryInterfacesCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeSecondaryInterfacesCommandInput,
    DescribeSecondaryInterfacesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeSecondaryInterfacesCommand extends DescribeSecondaryInterfacesCommand_base {
  protected static __types: {
    api: {
      input: DescribeSecondaryInterfacesRequest;
      output: DescribeSecondaryInterfacesResult;
    };
    sdk: {
      input: DescribeSecondaryInterfacesCommandInput;
      output: DescribeSecondaryInterfacesCommandOutput;
    };
  };
}
