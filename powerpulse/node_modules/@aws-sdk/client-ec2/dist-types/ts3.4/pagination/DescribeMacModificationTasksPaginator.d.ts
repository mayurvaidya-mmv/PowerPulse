import { Paginator } from "@smithy/types";
import {
  DescribeMacModificationTasksCommandInput,
  DescribeMacModificationTasksCommandOutput,
} from "../commands/DescribeMacModificationTasksCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateDescribeMacModificationTasks: (
  config: EC2PaginationConfiguration,
  input: DescribeMacModificationTasksCommandInput,
  ...rest: any[]
) => Paginator<DescribeMacModificationTasksCommandOutput>;
