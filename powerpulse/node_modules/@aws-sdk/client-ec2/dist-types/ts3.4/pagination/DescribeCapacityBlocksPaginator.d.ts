import { Paginator } from "@smithy/types";
import {
  DescribeCapacityBlocksCommandInput,
  DescribeCapacityBlocksCommandOutput,
} from "../commands/DescribeCapacityBlocksCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeCapacityBlocks: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityBlocksCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityBlocksCommandOutput>;
