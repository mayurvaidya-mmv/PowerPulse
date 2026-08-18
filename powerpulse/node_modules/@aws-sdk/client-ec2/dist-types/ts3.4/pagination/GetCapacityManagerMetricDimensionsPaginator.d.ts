import { Paginator } from "@smithy/types";
import {
  GetCapacityManagerMetricDimensionsCommandInput,
  GetCapacityManagerMetricDimensionsCommandOutput,
} from "../commands/GetCapacityManagerMetricDimensionsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateGetCapacityManagerMetricDimensions: (
  config: EC2PaginationConfiguration,
  input: GetCapacityManagerMetricDimensionsCommandInput,
  ...rest: any[]
) => Paginator<GetCapacityManagerMetricDimensionsCommandOutput>;
