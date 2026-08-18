import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { DeleteInstanceConnectEndpointRequest, DeleteInstanceConnectEndpointResult } from "../models/models_2";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInstanceConnectEndpointCommand}.
 */
export interface DeleteInstanceConnectEndpointCommandInput extends DeleteInstanceConnectEndpointRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteInstanceConnectEndpointCommand}.
 */
export interface DeleteInstanceConnectEndpointCommandOutput extends DeleteInstanceConnectEndpointResult, __MetadataBearer {
}
declare const DeleteInstanceConnectEndpointCommand_base: {
    new (input: DeleteInstanceConnectEndpointCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteInstanceConnectEndpointCommandInput, DeleteInstanceConnectEndpointCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: DeleteInstanceConnectEndpointCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteInstanceConnectEndpointCommandInput, DeleteInstanceConnectEndpointCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deletes the specified EC2 Instance Connect Endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteInstanceConnectEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteInstanceConnectEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteInstanceConnectEndpointRequest
 *   DryRun: true || false,
 *   InstanceConnectEndpointId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInstanceConnectEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInstanceConnectEndpointResult
 * //   InstanceConnectEndpoint: { // Ec2InstanceConnectEndpoint
 * //     OwnerId: "STRING_VALUE",
 * //     InstanceConnectEndpointId: "STRING_VALUE",
 * //     InstanceConnectEndpointArn: "STRING_VALUE",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "update-in-progress" || "update-complete" || "update-failed",
 * //     StateMessage: "STRING_VALUE",
 * //     DnsName: "STRING_VALUE",
 * //     FipsDnsName: "STRING_VALUE",
 * //     NetworkInterfaceIds: [ // NetworkInterfaceIdSet
 * //       "STRING_VALUE",
 * //     ],
 * //     VpcId: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     SubnetId: "STRING_VALUE",
 * //     PreserveClientIp: true || false,
 * //     SecurityGroupIds: [ // SecurityGroupIdSet
 * //       "STRING_VALUE",
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IpAddressType: "ipv4" || "dualstack" || "ipv6",
 * //     PublicDnsNames: { // InstanceConnectEndpointPublicDnsNames
 * //       Ipv4: { // InstanceConnectEndpointDnsNames
 * //         DnsName: "STRING_VALUE",
 * //         FipsDnsName: "STRING_VALUE",
 * //       },
 * //       Dualstack: {
 * //         DnsName: "STRING_VALUE",
 * //         FipsDnsName: "STRING_VALUE",
 * //       },
 * //     },
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteInstanceConnectEndpointCommandInput - {@link DeleteInstanceConnectEndpointCommandInput}
 * @returns {@link DeleteInstanceConnectEndpointCommandOutput}
 * @see {@link DeleteInstanceConnectEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceConnectEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class DeleteInstanceConnectEndpointCommand extends DeleteInstanceConnectEndpointCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteInstanceConnectEndpointRequest;
            output: DeleteInstanceConnectEndpointResult;
        };
        sdk: {
            input: DeleteInstanceConnectEndpointCommandInput;
            output: DeleteInstanceConnectEndpointCommandOutput;
        };
    };
}
