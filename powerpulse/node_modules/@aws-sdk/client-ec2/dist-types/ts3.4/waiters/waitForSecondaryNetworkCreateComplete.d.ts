import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeSecondaryNetworksCommandInput } from "../commands/DescribeSecondaryNetworksCommand";
import { EC2Client } from "../EC2Client";
export declare const waitForSecondaryNetworkCreateComplete: (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecondaryNetworksCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilSecondaryNetworkCreateComplete: (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecondaryNetworksCommandInput
) => Promise<WaiterResult>;
