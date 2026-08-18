import { createPaginator } from "@smithy/core";
import { DescribeSecondarySubnetsCommand, } from "../commands/DescribeSecondarySubnetsCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeSecondarySubnets = createPaginator(EC2Client, DescribeSecondarySubnetsCommand, "NextToken", "NextToken", "MaxResults");
