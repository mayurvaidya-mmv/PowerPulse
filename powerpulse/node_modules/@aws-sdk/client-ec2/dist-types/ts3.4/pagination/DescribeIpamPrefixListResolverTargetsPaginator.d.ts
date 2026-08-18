import { Paginator } from "@smithy/types";
import {
  DescribeIpamPrefixListResolverTargetsCommandInput,
  DescribeIpamPrefixListResolverTargetsCommandOutput,
} from "../commands/DescribeIpamPrefixListResolverTargetsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeIpamPrefixListResolverTargets: (
  config: EC2PaginationConfiguration,
  input: DescribeIpamPrefixListResolverTargetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeIpamPrefixListResolverTargetsCommandOutput>;
