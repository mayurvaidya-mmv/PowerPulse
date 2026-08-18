import { createPaginator } from "@smithy/core";
import { DescribeSecondaryInterfacesCommand, } from "../commands/DescribeSecondaryInterfacesCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeSecondaryInterfaces = createPaginator(EC2Client, DescribeSecondaryInterfacesCommand, "NextToken", "NextToken", "MaxResults");
