import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { UpdateCapacityManagerOrganizationsAccessRequest, UpdateCapacityManagerOrganizationsAccessResult } from "../models/models_7";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCapacityManagerOrganizationsAccessCommand}.
 */
export interface UpdateCapacityManagerOrganizationsAccessCommandInput extends UpdateCapacityManagerOrganizationsAccessRequest {
}
/**
 * @public
 *
 * The output of {@link UpdateCapacityManagerOrganizationsAccessCommand}.
 */
export interface UpdateCapacityManagerOrganizationsAccessCommandOutput extends UpdateCapacityManagerOrganizationsAccessResult, __MetadataBearer {
}
declare const UpdateCapacityManagerOrganizationsAccessCommand_base: {
    new (input: UpdateCapacityManagerOrganizationsAccessCommandInput): import("@smithy/smithy-client").CommandImpl<UpdateCapacityManagerOrganizationsAccessCommandInput, UpdateCapacityManagerOrganizationsAccessCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: UpdateCapacityManagerOrganizationsAccessCommandInput): import("@smithy/smithy-client").CommandImpl<UpdateCapacityManagerOrganizationsAccessCommandInput, UpdateCapacityManagerOrganizationsAccessCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>
 * Updates the Organizations access setting for EC2 Capacity Manager. This controls whether Capacity Manager can aggregate
 * data from all accounts in your Amazon Web Services Organization or only from the current account.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UpdateCapacityManagerOrganizationsAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UpdateCapacityManagerOrganizationsAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // UpdateCapacityManagerOrganizationsAccessRequest
 *   OrganizationsAccess: true || false, // required
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateCapacityManagerOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCapacityManagerOrganizationsAccessResult
 * //   CapacityManagerStatus: "enabled" || "disabled",
 * //   OrganizationsAccess: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateCapacityManagerOrganizationsAccessCommandInput - {@link UpdateCapacityManagerOrganizationsAccessCommandInput}
 * @returns {@link UpdateCapacityManagerOrganizationsAccessCommandOutput}
 * @see {@link UpdateCapacityManagerOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link UpdateCapacityManagerOrganizationsAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class UpdateCapacityManagerOrganizationsAccessCommand extends UpdateCapacityManagerOrganizationsAccessCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: UpdateCapacityManagerOrganizationsAccessRequest;
            output: UpdateCapacityManagerOrganizationsAccessResult;
        };
        sdk: {
            input: UpdateCapacityManagerOrganizationsAccessCommandInput;
            output: UpdateCapacityManagerOrganizationsAccessCommandOutput;
        };
    };
}
