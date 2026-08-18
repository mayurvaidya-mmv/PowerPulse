import { Paginator } from "@smithy/types";
import {
  DescribeSecondarySubnetsCommandInput,
  DescribeSecondarySubnetsCommandOutput,
} from "../commands/DescribeSecondarySubnetsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeSecondarySubnets: (
  config: EC2PaginationConfiguration,
  input: DescribeSecondarySubnetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSecondarySubnetsCommandOutput>;
