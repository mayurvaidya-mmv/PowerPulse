import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  UpdateInterruptibleCapacityReservationAllocationRequest,
  UpdateInterruptibleCapacityReservationAllocationResult,
} from "../models/models_7";
export { __MetadataBearer };
export { $Command };
export interface UpdateInterruptibleCapacityReservationAllocationCommandInput
  extends UpdateInterruptibleCapacityReservationAllocationRequest {}
export interface UpdateInterruptibleCapacityReservationAllocationCommandOutput
  extends UpdateInterruptibleCapacityReservationAllocationResult,
    __MetadataBearer {}
declare const UpdateInterruptibleCapacityReservationAllocationCommand_base: {
  new (
    input: UpdateInterruptibleCapacityReservationAllocationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateInterruptibleCapacityReservationAllocationCommandInput,
    UpdateInterruptibleCapacityReservationAllocationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: UpdateInterruptibleCapacityReservationAllocationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    UpdateInterruptibleCapacityReservationAllocationCommandInput,
    UpdateInterruptibleCapacityReservationAllocationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class UpdateInterruptibleCapacityReservationAllocationCommand extends UpdateInterruptibleCapacityReservationAllocationCommand_base {
  protected static __types: {
    api: {
      input: UpdateInterruptibleCapacityReservationAllocationRequest;
      output: UpdateInterruptibleCapacityReservationAllocationResult;
    };
    sdk: {
      input: UpdateInterruptibleCapacityReservationAllocationCommandInput;
      output: UpdateInterruptibleCapacityReservationAllocationCommandOutput;
    };
  };
}
