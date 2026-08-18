import type { Paginator } from "@smithy/types";
import { GetCapacityManagerMetricDataCommandInput, GetCapacityManagerMetricDataCommandOutput } from "../commands/GetCapacityManagerMetricDataCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetCapacityManagerMetricData: (config: EC2PaginationConfiguration, input: GetCapacityManagerMetricDataCommandInput, ...rest: any[]) => Paginator<GetCapacityManagerMetricDataCommandOutput>;
