import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2Client";
import {
  DescribeMacModificationTasksRequest,
  DescribeMacModificationTasksResult,
} from "../models/models_4";
export { __MetadataBearer };
export { $Command };
export interface DescribeMacModificationTasksCommandInput
  extends DescribeMacModificationTasksRequest {}
export interface DescribeMacModificationTasksCommandOutput
  extends DescribeMacModificationTasksResult,
    __MetadataBearer {}
declare const DescribeMacModificationTasksCommand_base: {
  new (
    input: DescribeMacModificationTasksCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeMacModificationTasksCommandInput,
    DescribeMacModificationTasksCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    ...[input]: [] | [DescribeMacModificationTasksCommandInput]
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeMacModificationTasksCommandInput,
    DescribeMacModificationTasksCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeMacModificationTasksCommand extends DescribeMacModificationTasksCommand_base {
  protected static __types: {
    api: {
      input: DescribeMacModificationTasksRequest;
      output: DescribeMacModificationTasksResult;
    };
    sdk: {
      input: DescribeMacModificationTasksCommandInput;
      output: DescribeMacModificationTasksCommandOutput;
    };
  };
}
