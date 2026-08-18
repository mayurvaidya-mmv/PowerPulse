import { Paginator } from "@smithy/types";
import {
  GetIpamPrefixListResolverVersionsCommandInput,
  GetIpamPrefixListResolverVersionsCommandOutput,
} from "../commands/GetIpamPrefixListResolverVersionsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateGetIpamPrefixListResolverVersions: (
  config: EC2PaginationConfiguration,
  input: GetIpamPrefixListResolverVersionsCommandInput,
  ...rest: any[]
) => Paginator<GetIpamPrefixListResolverVersionsCommandOutput>;
