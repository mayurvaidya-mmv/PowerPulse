import type { Paginator } from "@smithy/types";
import { GetIpamPrefixListResolverVersionEntriesCommandInput, GetIpamPrefixListResolverVersionEntriesCommandOutput } from "../commands/GetIpamPrefixListResolverVersionEntriesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateGetIpamPrefixListResolverVersionEntries: (config: EC2PaginationConfiguration, input: GetIpamPrefixListResolverVersionEntriesCommandInput, ...rest: any[]) => Paginator<GetIpamPrefixListResolverVersionEntriesCommandOutput>;
