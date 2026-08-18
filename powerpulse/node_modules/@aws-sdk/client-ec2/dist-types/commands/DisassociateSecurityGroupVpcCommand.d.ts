import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { DisassociateSecurityGroupVpcRequest, DisassociateSecurityGroupVpcResult } from "../models/models_5";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSecurityGroupVpcCommand}.
 */
export interface DisassociateSecurityGroupVpcCommandInput extends DisassociateSecurityGroupVpcRequest {
}
/**
 * @public
 *
 * The output of {@link DisassociateSecurityGroupVpcCommand}.
 */
export interface DisassociateSecurityGroupVpcCommandOutput extends DisassociateSecurityGroupVpcResult, __MetadataBearer {
}
declare const DisassociateSecurityGroupVpcCommand_base: {
    new (input: DisassociateSecurityGroupVpcCommandInput): import("@smithy/smithy-client").CommandImpl<DisassociateSecurityGroupVpcCommandInput, DisassociateSecurityGroupVpcCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: DisassociateSecurityGroupVpcCommandInput): import("@smithy/smithy-client").CommandImpl<DisassociateSecurityGroupVpcCommandInput, DisassociateSecurityGroupVpcCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Disassociates a security group from a VPC. You cannot disassociate the security group if any Elastic network interfaces in the associated VPC are still associated with the security group.
 *
 *             Note that the disassociation is asynchronous and you can check the status of the request with <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSecurityGroupVpcAssociations.html">DescribeSecurityGroupVpcAssociations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateSecurityGroupVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateSecurityGroupVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateSecurityGroupVpcRequest
 *   GroupId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisassociateSecurityGroupVpcCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateSecurityGroupVpcResult
 * //   State: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated" || "disassociation-failed",
 * // };
 *
 * ```
 *
 * @param DisassociateSecurityGroupVpcCommandInput - {@link DisassociateSecurityGroupVpcCommandInput}
 * @returns {@link DisassociateSecurityGroupVpcCommandOutput}
 * @see {@link DisassociateSecurityGroupVpcCommandInput} for command's `input` shape.
 * @see {@link DisassociateSecurityGroupVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class DisassociateSecurityGroupVpcCommand extends DisassociateSecurityGroupVpcCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DisassociateSecurityGroupVpcRequest;
            output: DisassociateSecurityGroupVpcResult;
        };
        sdk: {
            input: DisassociateSecurityGroupVpcCommandInput;
            output: DisassociateSecurityGroupVpcCommandOutput;
        };
    };
}
