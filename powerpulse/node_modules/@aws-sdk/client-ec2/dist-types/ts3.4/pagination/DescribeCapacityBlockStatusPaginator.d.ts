import { Paginator } from "@smithy/types";
import {
  DescribeCapacityBlockStatusCommandInput,
  DescribeCapacityBlockStatusCommandOutput,
} from "../commands/DescribeCapacityBlockStatusCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeCapacityBlockStatus: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityBlockStatusCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityBlockStatusCommandOutput>;
