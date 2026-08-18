import { createPaginator } from "@smithy/core";
import { DescribeSecondaryNetworksCommand, } from "../commands/DescribeSecondaryNetworksCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeSecondaryNetworks = createPaginator(EC2Client, DescribeSecondaryNetworksCommand, "NextToken", "NextToken", "MaxResults");
