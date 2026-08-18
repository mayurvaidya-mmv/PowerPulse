import { createPaginator } from "@smithy/core";
import { DescribeImageUsageReportsCommand, } from "../commands/DescribeImageUsageReportsCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeImageUsageReports = createPaginator(EC2Client, DescribeImageUsageReportsCommand, "NextToken", "NextToken", "MaxResults");
