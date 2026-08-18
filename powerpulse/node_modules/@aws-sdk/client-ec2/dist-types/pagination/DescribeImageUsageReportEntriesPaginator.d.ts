import type { Paginator } from "@smithy/types";
import { DescribeImageUsageReportEntriesCommandInput, DescribeImageUsageReportEntriesCommandOutput } from "../commands/DescribeImageUsageReportEntriesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeImageUsageReportEntries: (config: EC2PaginationConfiguration, input: DescribeImageUsageReportEntriesCommandInput, ...rest: any[]) => Paginator<DescribeImageUsageReportEntriesCommandOutput>;
