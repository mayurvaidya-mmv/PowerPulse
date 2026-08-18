import { Paginator } from "@smithy/types";
import {
  DescribeSecondaryNetworksCommandInput,
  DescribeSecondaryNetworksCommandOutput,
} from "../commands/DescribeSecondaryNetworksCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeSecondaryNetworks: (
  config: EC2PaginationConfiguration,
  input: DescribeSecondaryNetworksCommandInput,
  ...rest: any[]
) => Paginator<DescribeSecondaryNetworksCommandOutput>;
