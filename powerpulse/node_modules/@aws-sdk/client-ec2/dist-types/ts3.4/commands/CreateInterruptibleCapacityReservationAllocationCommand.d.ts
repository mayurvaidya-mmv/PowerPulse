import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateInterruptibleCapacityReservationAllocationRequest,
  CreateInterruptibleCapacityReservationAllocationResult,
} from "../models/models_1";
export { __MetadataBearer };
export { $Command };
export interface CreateInterruptibleCapacityReservationAllocationCommandInput
  extends CreateInterruptibleCapacityReservationAllocationRequest {}
export interface CreateInterruptibleCapacityReservationAllocationCommandOutput
  extends CreateInterruptibleCapacityReservationAllocationResult,
    __MetadataBearer {}
declare const CreateInterruptibleCapacityReservationAllocationCommand_base: {
  new (
    input: CreateInterruptibleCapacityReservationAllocationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateInterruptibleCapacityReservationAllocationCommandInput,
    CreateInterruptibleCapacityReservationAllocationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateInterruptibleCapacityReservationAllocationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateInterruptibleCapacityReservationAllocationCommandInput,
    CreateInterruptibleCapacityReservationAllocationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateInterruptibleCapacityReservationAllocationCommand extends CreateInterruptibleCapacityReservationAllocationCommand_base {
  protected static __types: {
    api: {
      input: CreateInterruptibleCapacityReservationAllocationRequest;
      output: CreateInterruptibleCapacityReservationAllocationResult;
    };
    sdk: {
      input: CreateInterruptibleCapacityReservationAllocationCommandInput;
      output: CreateInterruptibleCapacityReservationAllocationCommandOutput;
    };
  };
}
