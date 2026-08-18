import { Paginator } from "@smithy/types";
import {
  GetCapacityManagerMetricDataCommandInput,
  GetCapacityManagerMetricDataCommandOutput,
} from "../commands/GetCapacityManagerMetricDataCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateGetCapacityManagerMetricData: (
  config: EC2PaginationConfiguration,
  input: GetCapacityManagerMetricDataCommandInput,
  ...rest: any[]
) => Paginator<GetCapacityManagerMetricDataCommandOutput>;
