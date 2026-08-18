import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeImageUsageReportsCommandInput } from "../commands/DescribeImageUsageReportsCommand";
import { EC2Client } from "../EC2Client";
/**
 *
 *  @deprecated Use waitUntilImageUsageReportAvailable instead. waitForImageUsageReportAvailable does not throw error in non-success cases.
 */
export declare const waitForImageUsageReportAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeImageUsageReportsCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeImageUsageReportsCommand for polling.
 */
export declare const waitUntilImageUsageReportAvailable: (params: WaiterConfiguration<EC2Client>, input: DescribeImageUsageReportsCommandInput) => Promise<WaiterResult>;
