import { createPaginator } from "@smithy/core";
import { GetIpamPrefixListResolverVersionEntriesCommand, } from "../commands/GetIpamPrefixListResolverVersionEntriesCommand";
import { EC2Client } from "../EC2Client";
export const paginateGetIpamPrefixListResolverVersionEntries = createPaginator(EC2Client, GetIpamPrefixListResolverVersionEntriesCommand, "NextToken", "NextToken", "MaxResults");
