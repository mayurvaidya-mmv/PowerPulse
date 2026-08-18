import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { AssociateTransitGatewayRouteTableRequest, AssociateTransitGatewayRouteTableResult } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTransitGatewayRouteTableCommand}.
 */
export interface AssociateTransitGatewayRouteTableCommandInput extends AssociateTransitGatewayRouteTableRequest {
}
/**
 * @public
 *
 * The output of {@link AssociateTransitGatewayRouteTableCommand}.
 */
export interface AssociateTransitGatewayRouteTableCommandOutput extends AssociateTransitGatewayRouteTableResult, __MetadataBearer {
}
declare const AssociateTransitGatewayRouteTableCommand_base: {
    new (input: AssociateTransitGatewayRouteTableCommandInput): import("@smithy/smithy-client").CommandImpl<AssociateTransitGatewayRouteTableCommandInput, AssociateTransitGatewayRouteTableCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: AssociateTransitGatewayRouteTableCommandInput): import("@smithy/smithy-client").CommandImpl<AssociateTransitGatewayRouteTableCommandInput, AssociateTransitGatewayRouteTableCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Associates the specified attachment with the specified transit gateway route table. You can
 *         associate only one route table with an attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssociateTransitGatewayRouteTableRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AssociateTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTransitGatewayRouteTableResult
 * //   Association: { // TransitGatewayAssociation
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //     State: "associating" || "associated" || "disassociating" || "disassociated",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateTransitGatewayRouteTableCommandInput - {@link AssociateTransitGatewayRouteTableCommandInput}
 * @returns {@link AssociateTransitGatewayRouteTableCommandOutput}
 * @see {@link AssociateTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class AssociateTransitGatewayRouteTableCommand extends AssociateTransitGatewayRouteTableCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: AssociateTransitGatewayRouteTableRequest;
            output: AssociateTransitGatewayRouteTableResult;
        };
        sdk: {
            input: AssociateTransitGatewayRouteTableCommandInput;
            output: AssociateTransitGatewayRouteTableCommandOutput;
        };
    };
}
