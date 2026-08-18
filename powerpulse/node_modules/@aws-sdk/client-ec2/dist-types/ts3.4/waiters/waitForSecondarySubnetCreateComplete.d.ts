import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeSecondarySubnetsCommandInput } from "../commands/DescribeSecondarySubnetsCommand";
import { EC2Client } from "../EC2Client";
export declare const waitForSecondarySubnetCreateComplete: (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecondarySubnetsCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilSecondarySubnetCreateComplete: (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecondarySubnetsCommandInput
) => Promise<WaiterResult>;
