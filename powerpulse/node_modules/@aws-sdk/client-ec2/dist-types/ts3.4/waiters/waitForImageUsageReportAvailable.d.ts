import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeImageUsageReportsCommandInput } from "../commands/DescribeImageUsageReportsCommand";
import { EC2Client } from "../EC2Client";
export declare const waitForImageUsageReportAvailable: (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeImageUsageReportsCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilImageUsageReportAvailable: (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeImageUsageReportsCommandInput
) => Promise<WaiterResult>;
