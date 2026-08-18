import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { GetTransitGatewayMeteringPolicyEntriesRequest, GetTransitGatewayMeteringPolicyEntriesResult } from "../models/models_6";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayMeteringPolicyEntriesCommand}.
 */
export interface GetTransitGatewayMeteringPolicyEntriesCommandInput extends GetTransitGatewayMeteringPolicyEntriesRequest {
}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayMeteringPolicyEntriesCommand}.
 */
export interface GetTransitGatewayMeteringPolicyEntriesCommandOutput extends GetTransitGatewayMeteringPolicyEntriesResult, __MetadataBearer {
}
declare const GetTransitGatewayMeteringPolicyEntriesCommand_base: {
    new (input: GetTransitGatewayMeteringPolicyEntriesCommandInput): import("@smithy/smithy-client").CommandImpl<GetTransitGatewayMeteringPolicyEntriesCommandInput, GetTransitGatewayMeteringPolicyEntriesCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: GetTransitGatewayMeteringPolicyEntriesCommandInput): import("@smithy/smithy-client").CommandImpl<GetTransitGatewayMeteringPolicyEntriesCommandInput, GetTransitGatewayMeteringPolicyEntriesCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Retrieves the entries for a transit gateway metering policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayMeteringPolicyEntriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayMeteringPolicyEntriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayMeteringPolicyEntriesRequest
 *   TransitGatewayMeteringPolicyId: "STRING_VALUE", // required
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
 * const command = new GetTransitGatewayMeteringPolicyEntriesCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayMeteringPolicyEntriesResult
 * //   TransitGatewayMeteringPolicyEntries: [ // TransitGatewayMeteringPolicyEntryList
 * //     { // TransitGatewayMeteringPolicyEntry
 * //       PolicyRuleNumber: "STRING_VALUE",
 * //       MeteredAccount: "source-attachment-owner" || "destination-attachment-owner" || "transit-gateway-owner",
 * //       State: "available" || "deleted",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       UpdateEffectiveAt: new Date("TIMESTAMP"),
 * //       MeteringPolicyRule: { // TransitGatewayMeteringPolicyRule
 * //         SourceTransitGatewayAttachmentId: "STRING_VALUE",
 * //         SourceTransitGatewayAttachmentType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //         SourceCidrBlock: "STRING_VALUE",
 * //         SourcePortRange: "STRING_VALUE",
 * //         DestinationTransitGatewayAttachmentId: "STRING_VALUE",
 * //         DestinationTransitGatewayAttachmentType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //         DestinationCidrBlock: "STRING_VALUE",
 * //         DestinationPortRange: "STRING_VALUE",
 * //         Protocol: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayMeteringPolicyEntriesCommandInput - {@link GetTransitGatewayMeteringPolicyEntriesCommandInput}
 * @returns {@link GetTransitGatewayMeteringPolicyEntriesCommandOutput}
 * @see {@link GetTransitGatewayMeteringPolicyEntriesCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayMeteringPolicyEntriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class GetTransitGatewayMeteringPolicyEntriesCommand extends GetTransitGatewayMeteringPolicyEntriesCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: GetTransitGatewayMeteringPolicyEntriesRequest;
            output: GetTransitGatewayMeteringPolicyEntriesResult;
        };
        sdk: {
            input: GetTransitGatewayMeteringPolicyEntriesCommandInput;
            output: GetTransitGatewayMeteringPolicyEntriesCommandOutput;
        };
    };
}
