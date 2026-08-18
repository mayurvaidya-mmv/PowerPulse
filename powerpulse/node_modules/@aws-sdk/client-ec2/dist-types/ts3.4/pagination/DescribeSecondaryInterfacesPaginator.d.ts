import { Paginator } from "@smithy/types";
import {
  DescribeSecondaryInterfacesCommandInput,
  DescribeSecondaryInterfacesCommandOutput,
} from "../commands/DescribeSecondaryInterfacesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeSecondaryInterfaces: (
  config: EC2PaginationConfiguration,
  input: DescribeSecondaryInterfacesCommandInput,
  ...rest: any[]
) => Paginator<DescribeSecondaryInterfacesCommandOutput>;
