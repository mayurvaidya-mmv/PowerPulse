import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeSecondaryNetworksCommandInput } from "../commands/DescribeSecondaryNetworksCommand";
import { EC2Client } from "../EC2Client";
export declare const waitForSecondaryNetworkDeleteComplete: (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecondaryNetworksCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilSecondaryNetworkDeleteComplete: (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecondaryNetworksCommandInput
) => Promise<WaiterResult>;
