import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { DeleteNetworkAclEntryRequest } from "../models/models_2";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkAclEntryCommand}.
 */
export interface DeleteNetworkAclEntryCommandInput extends DeleteNetworkAclEntryRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteNetworkAclEntryCommand}.
 */
export interface DeleteNetworkAclEntryCommandOutput extends __MetadataBearer {
}
declare const DeleteNetworkAclEntryCommand_base: {
    new (input: DeleteNetworkAclEntryCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteNetworkAclEntryCommandInput, DeleteNetworkAclEntryCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: DeleteNetworkAclEntryCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteNetworkAclEntryCommandInput, DeleteNetworkAclEntryCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Deletes the specified ingress or egress entry (rule) from the specified network ACL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkAclEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkAclEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkAclEntryRequest
 *   DryRun: true || false,
 *   NetworkAclId: "STRING_VALUE", // required
 *   RuleNumber: Number("int"), // required
 *   Egress: true || false, // required
 * };
 * const command = new DeleteNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNetworkAclEntryCommandInput - {@link DeleteNetworkAclEntryCommandInput}
 * @returns {@link DeleteNetworkAclEntryCommandOutput}
 * @see {@link DeleteNetworkAclEntryCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkAclEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a network ACL entry
 * ```javascript
 * // This example deletes ingress rule number 100 from the specified network ACL.
 * const input = {
 *   Egress: true,
 *   NetworkAclId: "acl-5fb85d36",
 *   RuleNumber: 100
 * };
 * const command = new DeleteNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export declare class DeleteNetworkAclEntryCommand extends DeleteNetworkAclEntryCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: DeleteNetworkAclEntryRequest;
            output: {};
        };
        sdk: {
            input: DeleteNetworkAclEntryCommandInput;
            output: DeleteNetworkAclEntryCommandOutput;
        };
    };
}
