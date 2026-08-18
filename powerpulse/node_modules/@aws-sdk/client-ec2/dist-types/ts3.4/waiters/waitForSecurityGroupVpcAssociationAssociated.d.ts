import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeSecurityGroupVpcAssociationsCommandInput } from "../commands/DescribeSecurityGroupVpcAssociationsCommand";
import { EC2Client } from "../EC2Client";
export declare const waitForSecurityGroupVpcAssociationAssociated: (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecurityGroupVpcAssociationsCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilSecurityGroupVpcAssociationAssociated: (
  params: WaiterConfiguration<EC2Client>,
  input: DescribeSecurityGroupVpcAssociationsCommandInput
) => Promise<WaiterResult>;
