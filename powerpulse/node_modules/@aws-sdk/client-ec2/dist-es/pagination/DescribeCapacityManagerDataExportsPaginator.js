import { createPaginator } from "@smithy/core";
import { DescribeCapacityManagerDataExportsCommand, } from "../commands/DescribeCapacityManagerDataExportsCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeCapacityManagerDataExports = createPaginator(EC2Client, DescribeCapacityManagerDataExportsCommand, "NextToken", "NextToken", "MaxResults");
