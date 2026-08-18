import { createPaginator } from "@smithy/core";
import { DescribeIpamPrefixListResolverTargetsCommand, } from "../commands/DescribeIpamPrefixListResolverTargetsCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeIpamPrefixListResolverTargets = createPaginator(EC2Client, DescribeIpamPrefixListResolverTargetsCommand, "NextToken", "NextToken", "MaxResults");
