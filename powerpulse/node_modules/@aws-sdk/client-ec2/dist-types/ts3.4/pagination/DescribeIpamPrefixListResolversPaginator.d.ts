import { Paginator } from "@smithy/types";
import {
  DescribeIpamPrefixListResolversCommandInput,
  DescribeIpamPrefixListResolversCommandOutput,
} from "../commands/DescribeIpamPrefixListResolversCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeIpamPrefixListResolvers: (
  config: EC2PaginationConfiguration,
  input: DescribeIpamPrefixListResolversCommandInput,
  ...rest: any[]
) => Paginator<DescribeIpamPrefixListResolversCommandOutput>;
