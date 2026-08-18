import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  CreateCapacityReservationRequest,
  CreateCapacityReservationResult,
} from "../models/models_0";
export { __MetadataBearer };
export { $Command };
export interface CreateCapacityReservationCommandInput
  extends CreateCapacityReservationRequest {}
export interface CreateCapacityReservationCommandOutput
  extends CreateCapacityReservationResult,
    __MetadataBearer {}
declare const CreateCapacityReservationCommand_base: {
  new (
    input: CreateCapacityReservationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateCapacityReservationCommandInput,
    CreateCapacityReservationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    input: CreateCapacityReservationCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateCapacityReservationCommandInput,
    CreateCapacityReservationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateCapacityReservationCommand extends CreateCapacityReservationCommand_base {
  protected static __types: {
    api: {
      input: CreateCapacityReservationRequest;
      output: CreateCapacityReservationResult;
    };
    sdk: {
      input: CreateCapacityReservationCommandInput;
      output: CreateCapacityReservationCommandOutput;
    };
  };
}
