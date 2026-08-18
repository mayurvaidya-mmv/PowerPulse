import { Paginator } from "@smithy/types";
import {
  DescribeCapacityManagerDataExportsCommandInput,
  DescribeCapacityManagerDataExportsCommandOutput,
} from "../commands/DescribeCapacityManagerDataExportsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeCapacityManagerDataExports: (
  config: EC2PaginationConfiguration,
  input: DescribeCapacityManagerDataExportsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCapacityManagerDataExportsCommandOutput>;
