import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeCapacityReservationTopologyRequest,
  DescribeCapacityReservationTopologyResult,
} from "../models/models_3";
export { __MetadataBearer };
export { $Command };
export interface DescribeCapacityReservationTopologyCommandInput
  extends DescribeCapacityReservationTopologyRequest {}
export interface DescribeCapacityReservationTopologyCommandOutput
  extends DescribeCapacityReservationTopologyResult,
    __MetadataBearer {}
declare const DescribeCapacityReservationTopologyCommand_base: {
  new (
    input: DescribeCapacityReservationTopologyCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeCapacityReservationTopologyCommandInput,
    DescribeCapacityReservationTopologyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeCapacityReservationTopologyCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeCapacityReservationTopologyCommandInput,
    DescribeCapacityReservationTopologyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeCapacityReservationTopologyCommand extends DescribeCapacityReservationTopologyCommand_base {
  protected static __types: {
    api: {
      input: DescribeCapacityReservationTopologyRequest;
      output: DescribeCapacityReservationTopologyResult;
    };
    sdk: {
      input: DescribeCapacityReservationTopologyCommandInput;
      output: DescribeCapacityReservationTopologyCommandOutput;
    };
  };
}
