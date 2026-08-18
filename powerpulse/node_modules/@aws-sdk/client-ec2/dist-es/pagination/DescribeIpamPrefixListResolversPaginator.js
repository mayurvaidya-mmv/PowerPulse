import { createPaginator } from "@smithy/core";
import { DescribeIpamPrefixListResolversCommand, } from "../commands/DescribeIpamPrefixListResolversCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeIpamPrefixListResolvers = createPaginator(EC2Client, DescribeIpamPrefixListResolversCommand, "NextToken", "NextToken", "MaxResults");
