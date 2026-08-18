import { Paginator } from "@smithy/types";
import {
  GetIpamPrefixListResolverRulesCommandInput,
  GetIpamPrefixListResolverRulesCommandOutput,
} from "../commands/GetIpamPrefixListResolverRulesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateGetIpamPrefixListResolverRules: (
  config: EC2PaginationConfiguration,
  input: GetIpamPrefixListResolverRulesCommandInput,
  ...rest: any[]
) => Paginator<GetIpamPrefixListResolverRulesCommandOutput>;
