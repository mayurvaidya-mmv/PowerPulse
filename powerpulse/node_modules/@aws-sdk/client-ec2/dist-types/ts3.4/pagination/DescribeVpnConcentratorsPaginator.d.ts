import { Paginator } from "@smithy/types";
import {
  DescribeVpnConcentratorsCommandInput,
  DescribeVpnConcentratorsCommandOutput,
} from "../commands/DescribeVpnConcentratorsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeVpnConcentrators: (
  config: EC2PaginationConfiguration,
  input: DescribeVpnConcentratorsCommandInput,
  ...rest: any[]
) => Paginator<DescribeVpnConcentratorsCommandOutput>;
