import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { DeleteRouteServerEndpointRequest, DeleteRouteServerEndpointResult } from "../models/models_2";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRouteServerEndpointCommand}.
 */
export interface DeleteRouteServerEndpointCommandInput extends DeleteRouteServerEndpointRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteRouteServerEndpointCommand}.
 */
export interface DeleteRouteServerEndpointCommandOutput extends DeleteRouteServerEndpointResult, __MetadataBearer {
}
declare const DeleteRouteServerEndpointCommand_base: {
    new (input: DeleteRouteServerEndpointCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteRouteServerEndpointCommandInput, DeleteRouteServerEndpointCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: DeleteRouteServerEndpointCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteRouteServerEndpointCommandInput, DeleteRouteServerEndpointCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deletes the specified route server endpoint.</p>
 *          <p>A route server endpoint is an Amazon Web Services-managed component inside a subnet that facilitates <a href="https://en.wikipedia.org/wiki/Border_Gateway_Protocol">BGP (Border Gateway Protocol)</a> connections between your route server and your BGP peers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteRouteServerEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteRouteServerEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteRouteServerEndpointRequest
 *   RouteServerEndpointId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteRouteServerEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRouteServerEndpointResult
 * //   RouteServerEndpoint: { // RouteServerEndpoint
 * //     RouteServerId: "STRING_VALUE",
 * //     RouteServerEndpointId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetId: "STRING_VALUE",
 * //     EniId: "STRING_VALUE",
 * //     EniAddress: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted" || "failing" || "failed" || "delete-failed",
 * //     FailureReason: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteRouteServerEndpointCommandInput - {@link DeleteRouteServerEndpointCommandInput}
 * @returns {@link DeleteRouteServerEndpointCommandOutput}
 * @see {@link DeleteRouteServerEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteServerEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class DeleteRouteServerEndpointCommand extends DeleteRouteServerEndpointCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteRouteServerEndpointRequest;
            output: DeleteRouteServerEndpointResult;
        };
        sdk: {
            input: DeleteRouteServerEndpointCommandInput;
            output: DeleteRouteServerEndpointCommandOutput;
        };
    };
}
