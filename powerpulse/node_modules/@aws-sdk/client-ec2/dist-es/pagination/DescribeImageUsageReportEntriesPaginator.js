import { createPaginator } from "@smithy/core";
import { DescribeImageUsageReportEntriesCommand, } from "../commands/DescribeImageUsageReportEntriesCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeImageUsageReportEntries = createPaginator(EC2Client, DescribeImageUsageReportEntriesCommand, "NextToken", "NextToken", "MaxResults");
