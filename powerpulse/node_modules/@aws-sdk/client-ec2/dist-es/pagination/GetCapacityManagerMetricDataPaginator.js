import { createPaginator } from "@smithy/core";
import { GetCapacityManagerMetricDataCommand, } from "../commands/GetCapacityManagerMetricDataCommand";
import { EC2Client } from "../EC2Client";
export const paginateGetCapacityManagerMetricData = createPaginator(EC2Client, GetCapacityManagerMetricDataCommand, "NextToken", "NextToken", "MaxResults");
