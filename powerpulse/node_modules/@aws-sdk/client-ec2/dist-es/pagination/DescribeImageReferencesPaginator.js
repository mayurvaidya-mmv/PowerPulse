import { createPaginator } from "@smithy/core";
import { DescribeImageReferencesCommand, } from "../commands/DescribeImageReferencesCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeImageReferences = createPaginator(EC2Client, DescribeImageReferencesCommand, "NextToken", "NextToken", "MaxResults");
