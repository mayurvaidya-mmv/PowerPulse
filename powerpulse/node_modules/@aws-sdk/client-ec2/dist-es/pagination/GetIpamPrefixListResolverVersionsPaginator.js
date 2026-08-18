import { createPaginator } from "@smithy/core";
import { GetIpamPrefixListResolverVersionsCommand, } from "../commands/GetIpamPrefixListResolverVersionsCommand";
import { EC2Client } from "../EC2Client";
export const paginateGetIpamPrefixListResolverVersions = createPaginator(EC2Client, GetIpamPrefixListResolverVersionsCommand, "NextToken", "NextToken", "MaxResults");
