import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { DescribeServiceLinkVirtualInterfacesRequest, DescribeServiceLinkVirtualInterfacesResult } from "../models/models_4";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceLinkVirtualInterfacesCommand}.
 */
export interface DescribeServiceLinkVirtualInterfacesCommandInput extends DescribeServiceLinkVirtualInterfacesRequest {
}
/**
 * @public
 *
 * The output of {@link DescribeServiceLinkVirtualInterfacesCommand}.
 */
export interface DescribeServiceLinkVirtualInterfacesCommandOutput extends DescribeServiceLinkVirtualInterfacesResult, __MetadataBearer {
}
declare const DescribeServiceLinkVirtualInterfacesCommand_base: {
    new (input: DescribeServiceLinkVirtualInterfacesCommandInput): import("@smithy/smithy-client").CommandImpl<DescribeServiceLinkVirtualInterfacesCommandInput, DescribeServiceLinkVirtualInterfacesCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (...[input]: [] | [DescribeServiceLinkVirtualInterfacesCommandInput]): import("@smithy/smithy-client").CommandImpl<DescribeServiceLinkVirtualInterfacesCommandInput, DescribeServiceLinkVirtualInterfacesCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Describes the Outpost service link virtual interfaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeServiceLinkVirtualInterfacesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeServiceLinkVirtualInterfacesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeServiceLinkVirtualInterfacesRequest
 *   ServiceLinkVirtualInterfaceIds: [ // ServiceLinkVirtualInterfaceIdSet
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DescribeServiceLinkVirtualInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceLinkVirtualInterfacesResult
 * //   ServiceLinkVirtualInterfaces: [ // ServiceLinkVirtualInterfaceSet
 * //     { // ServiceLinkVirtualInterface
 * //       ServiceLinkVirtualInterfaceId: "STRING_VALUE",
 * //       ServiceLinkVirtualInterfaceArn: "STRING_VALUE",
 * //       OutpostId: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       LocalAddress: "STRING_VALUE",
 * //       PeerAddress: "STRING_VALUE",
 * //       PeerBgpAsn: Number("long"),
 * //       Vlan: Number("int"),
 * //       OutpostLagId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ConfigurationState: "pending" || "available" || "deleting" || "deleted",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeServiceLinkVirtualInterfacesCommandInput - {@link DescribeServiceLinkVirtualInterfacesCommandInput}
 * @returns {@link DescribeServiceLinkVirtualInterfacesCommandOutput}
 * @see {@link DescribeServiceLinkVirtualInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceLinkVirtualInterfacesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class DescribeServiceLinkVirtualInterfacesCommand extends DescribeServiceLinkVirtualInterfacesCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DescribeServiceLinkVirtualInterfacesRequest;
            output: DescribeServiceLinkVirtualInterfacesResult;
        };
        sdk: {
            input: DescribeServiceLinkVirtualInterfacesCommandInput;
            output: DescribeServiceLinkVirtualInterfacesCommandOutput;
        };
    };
}
