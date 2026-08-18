import { createPaginator } from "@smithy/core";
import { GetCapacityManagerMetricDimensionsCommand, } from "../commands/GetCapacityManagerMetricDimensionsCommand";
import { EC2Client } from "../EC2Client";
export const paginateGetCapacityManagerMetricDimensions = createPaginator(EC2Client, GetCapacityManagerMetricDimensionsCommand, "NextToken", "NextToken", "MaxResults");
