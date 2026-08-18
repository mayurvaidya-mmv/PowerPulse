import { Paginator } from "@smithy/types";
import {
  DescribeImageUsageReportEntriesCommandInput,
  DescribeImageUsageReportEntriesCommandOutput,
} from "../commands/DescribeImageUsageReportEntriesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeImageUsageReportEntries: (
  config: EC2PaginationConfiguration,
  input: DescribeImageUsageReportEntriesCommandInput,
  ...rest: any[]
) => Paginator<DescribeImageUsageReportEntriesCommandOutput>;
