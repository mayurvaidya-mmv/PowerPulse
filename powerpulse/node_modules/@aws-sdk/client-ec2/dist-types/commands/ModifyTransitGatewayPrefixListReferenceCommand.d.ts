import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { ModifyTransitGatewayPrefixListReferenceRequest, ModifyTransitGatewayPrefixListReferenceResult } from "../models/models_7";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyTransitGatewayPrefixListReferenceCommand}.
 */
export interface ModifyTransitGatewayPrefixListReferenceCommandInput extends ModifyTransitGatewayPrefixListReferenceRequest {
}
/**
 * @public
 *
 * The output of {@link ModifyTransitGatewayPrefixListReferenceCommand}.
 */
export interface ModifyTransitGatewayPrefixListReferenceCommandOutput extends ModifyTransitGatewayPrefixListReferenceResult, __MetadataBearer {
}
declare const ModifyTransitGatewayPrefixListReferenceCommand_base: {
    new (input: ModifyTransitGatewayPrefixListReferenceCommandInput): import("@smithy/smithy-client").CommandImpl<ModifyTransitGatewayPrefixListReferenceCommandInput, ModifyTransitGatewayPrefixListReferenceCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: ModifyTransitGatewayPrefixListReferenceCommandInput): import("@smithy/smithy-client").CommandImpl<ModifyTransitGatewayPrefixListReferenceCommandInput, ModifyTransitGatewayPrefixListReferenceCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Modifies a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyTransitGatewayPrefixListReferenceRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   PrefixListId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE",
 *   Blackhole: true || false,
 *   DryRun: true || false,
 * };
 * const command = new ModifyTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTransitGatewayPrefixListReferenceResult
 * //   TransitGatewayPrefixListReference: { // TransitGatewayPrefixListReference
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     PrefixListId: "STRING_VALUE",
 * //     PrefixListOwnerId: "STRING_VALUE",
 * //     State: "pending" || "available" || "modifying" || "deleting",
 * //     Blackhole: true || false,
 * //     TransitGatewayAttachment: { // TransitGatewayPrefixListAttachment
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //       ResourceId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyTransitGatewayPrefixListReferenceCommandInput - {@link ModifyTransitGatewayPrefixListReferenceCommandInput}
 * @returns {@link ModifyTransitGatewayPrefixListReferenceCommandOutput}
 * @see {@link ModifyTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class ModifyTransitGatewayPrefixListReferenceCommand extends ModifyTransitGatewayPrefixListReferenceCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: ModifyTransitGatewayPrefixListReferenceRequest;
            output: ModifyTransitGatewayPrefixListReferenceResult;
        };
        sdk: {
            input: ModifyTransitGatewayPrefixListReferenceCommandInput;
            output: ModifyTransitGatewayPrefixListReferenceCommandOutput;
        };
    };
}
