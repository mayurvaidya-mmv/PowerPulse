import { Paginator } from "@smithy/types";
import {
  DescribeImageReferencesCommandInput,
  DescribeImageReferencesCommandOutput,
} from "../commands/DescribeImageReferencesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeImageReferences: (
  config: EC2PaginationConfiguration,
  input: DescribeImageReferencesCommandInput,
  ...rest: any[]
) => Paginator<DescribeImageReferencesCommandOutput>;
