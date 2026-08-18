import { Paginator } from "@smithy/types";
import {
  SearchTransitGatewayRoutesCommandInput,
  SearchTransitGatewayRoutesCommandOutput,
} from "../commands/SearchTransitGatewayRoutesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
export declare const paginateSearchTransitGatewayRoutes: (
  config: EC2PaginationConfiguration,
  input: SearchTransitGatewayRoutesCommandInput,
  ...rest: any[]
) => Paginator<SearchTransitGatewayRoutesCommandOutput>;
