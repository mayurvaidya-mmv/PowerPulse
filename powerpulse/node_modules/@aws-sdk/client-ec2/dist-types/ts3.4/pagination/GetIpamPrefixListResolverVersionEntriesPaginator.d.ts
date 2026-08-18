import { Paginator } from "@smithy/types";
import {
  GetIpamPrefixListResolverVersionEntriesCommandInput,
  GetIpamPrefixListResolverVersionEntriesCommandOutput,
} from "../commands/GetIpamPrefixListResolverVersionEntriesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateGetIpamPrefixListResolverVersionEntries: (
  config: EC2PaginationConfiguration,
  input: GetIpamPrefixListResolverVersionEntriesCommandInput,
  ...rest: any[]
) => Paginator<GetIpamPrefixListResolverVersionEntriesCommandOutput>;
