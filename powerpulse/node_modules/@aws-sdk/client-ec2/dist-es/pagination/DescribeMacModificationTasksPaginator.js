import { createPaginator } from "@smithy/core";
import { DescribeMacModificationTasksCommand, } from "../commands/DescribeMacModificationTasksCommand";
import { EC2Client } from "../EC2Client";
export const paginateDescribeMacModificationTasks = createPaginator(EC2Client, DescribeMacModificationTasksCommand, "NextToken", "NextToken", "MaxResults");
