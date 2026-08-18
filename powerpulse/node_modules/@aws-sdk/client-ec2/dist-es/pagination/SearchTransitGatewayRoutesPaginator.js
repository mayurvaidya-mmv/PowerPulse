import { createPaginator } from "@smithy/core";
import { SearchTransitGatewayRoutesCommand, } from "../commands/SearchTransitGatewayRoutesCommand";
import { EC2Client } from "../EC2Client";
export const paginateSearchTransitGatewayRoutes = createPaginator(EC2Client, SearchTransitGatewayRoutesCommand, "NextToken", "NextToken", "MaxResults");
