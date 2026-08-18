import type { Paginator } from "@smithy/types";
import { DescribeCapacityBlockStatusCommandInput, DescribeCapacityBlockStatusCommandOutput } from "../commands/DescribeCapacityBlockStatusCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeCapacityBlockStatus: (config: EC2PaginationConfiguration, input: DescribeCapacityBlockStatusCommandInput, ...rest: any[]) => Paginator<DescribeCapacityBlockStatusCommandOutput>;
