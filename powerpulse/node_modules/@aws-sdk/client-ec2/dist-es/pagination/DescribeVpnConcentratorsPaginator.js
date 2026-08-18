import { createPaginator } from "@smithy/core";
import { DescribeVpnConcentratorsCommand, } from "../commands/DescribeVpnConcentratorsCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeVpnConcentrators = createPaginator(EC2Client, DescribeVpnConcentratorsCommand, "NextToken", "NextToken", "MaxResults");
