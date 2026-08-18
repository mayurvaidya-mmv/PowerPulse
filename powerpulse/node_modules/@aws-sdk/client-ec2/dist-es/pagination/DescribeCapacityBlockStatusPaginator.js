import { createPaginator } from "@smithy/core";
import { DescribeCapacityBlockStatusCommand, } from "../commands/DescribeCapacityBlockStatusCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeCapacityBlockStatus = createPaginator(EC2Client, DescribeCapacityBlockStatusCommand, "NextToken", "NextToken", "MaxResults");
