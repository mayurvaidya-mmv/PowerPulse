import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { DeleteCoipCidrRequest, DeleteCoipCidrResult } from "../models/models_2";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCoipCidrCommand}.
 */
export interface DeleteCoipCidrCommandInput extends DeleteCoipCidrRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteCoipCidrCommand}.
 */
export interface DeleteCoipCidrCommandOutput extends DeleteCoipCidrResult, __MetadataBearer {
}
declare const DeleteCoipCidrCommand_base: {
    new (input: DeleteCoipCidrCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteCoipCidrCommandInput, DeleteCoipCidrCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: DeleteCoipCidrCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteCoipCidrCommandInput, DeleteCoipCidrCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>
 *       Deletes a range of customer-owned IP addresses.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteCoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 *   CoipPoolId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteCoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCoipCidrResult
 * //   CoipCidr: { // CoipCidr
 * //     Cidr: "STRING_VALUE",
 * //     CoipPoolId: "STRING_VALUE",
 * //     LocalGatewayRouteTableId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteCoipCidrCommandInput - {@link DeleteCoipCidrCommandInput}
 * @returns {@link DeleteCoipCidrCommandOutput}
 * @see {@link DeleteCoipCidrCommandInput} for command's `input` shape.
 * @see {@link DeleteCoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class DeleteCoipCidrCommand extends DeleteCoipCidrCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteCoipCidrRequest;
            output: DeleteCoipCidrResult;
        };
        sdk: {
            input: DeleteCoipCidrCommandInput;
            output: DeleteCoipCidrCommandOutput;
        };
    };
}
