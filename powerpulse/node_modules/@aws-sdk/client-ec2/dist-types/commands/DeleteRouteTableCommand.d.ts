import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { DeleteRouteTableRequest } from "../models/models_2";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRouteTableCommand}.
 */
export interface DeleteRouteTableCommandInput extends DeleteRouteTableRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteRouteTableCommand}.
 */
export interface DeleteRouteTableCommandOutput extends __MetadataBearer {
}
declare const DeleteRouteTableCommand_base: {
    new (input: DeleteRouteTableCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteRouteTableCommandInput, DeleteRouteTableCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: DeleteRouteTableCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteRouteTableCommandInput, DeleteRouteTableCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deletes the specified route table. You must disassociate the route table from any subnets before you can delete it. You can't delete the main route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteRouteTableRequest
 *   DryRun: true || false,
 *   RouteTableId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRouteTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRouteTableCommandInput - {@link DeleteRouteTableCommandInput}
 * @returns {@link DeleteRouteTableCommandOutput}
 * @see {@link DeleteRouteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a route table
 * ```javascript
 * // This example deletes the specified route table.
 * const input = {
 *   RouteTableId: "rtb-22574640"
 * };
 * const command = new DeleteRouteTableCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export declare class DeleteRouteTableCommand extends DeleteRouteTableCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteRouteTableRequest;
            output: {};
        };
        sdk: {
            input: DeleteRouteTableCommandInput;
            output: DeleteRouteTableCommandOutput;
        };
    };
}
