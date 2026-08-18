import { createPaginator } from "@smithy/core";
import { DescribeCapacityBlocksCommand, } from "../commands/DescribeCapacityBlocksCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeCapacityBlocks = createPaginator(EC2Client, DescribeCapacityBlocksCommand, "NextToken", "NextToken", "MaxResults");
