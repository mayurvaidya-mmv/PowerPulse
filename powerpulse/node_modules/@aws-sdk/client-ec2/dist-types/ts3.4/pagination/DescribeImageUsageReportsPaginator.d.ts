import { Paginator } from "@smithy/types";
import {
  DescribeImageUsageReportsCommandInput,
  DescribeImageUsageReportsCommandOutput,
} from "../commands/DescribeImageUsageReportsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeImageUsageReports: (
  config: EC2PaginationConfiguration,
  input: DescribeImageUsageReportsCommandInput,
  ...rest: any[]
) => Paginator<DescribeImageUsageReportsCommandOutput>;
