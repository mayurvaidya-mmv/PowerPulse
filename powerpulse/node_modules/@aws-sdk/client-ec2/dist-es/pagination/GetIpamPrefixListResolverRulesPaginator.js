import { createPaginator } from "@smithy/core";
import { GetIpamPrefixListResolverRulesCommand, } from "../commands/GetIpamPrefixListResolverRulesCommand";
import { EC2Client } from "../EC2Client";
export const paginateGetIpamPrefixListResolverRules = createPaginator(EC2Client, GetIpamPrefixListResolverRulesCommand, "NextToken", "NextToken", "MaxResults");
