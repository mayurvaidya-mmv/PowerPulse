import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import type { AssociateCapacityReservationBillingOwnerRequest, AssociateCapacityReservationBillingOwnerResult } from "../models/models_0";
/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateCapacityReservationBillingOwnerCommand}.
 */
export interface AssociateCapacityReservationBillingOwnerCommandInput extends AssociateCapacityReservationBillingOwnerRequest {
}
/**
 * @public
 *
 * The output of {@link AssociateCapacityReservationBillingOwnerCommand}.
 */
export interface AssociateCapacityReservationBillingOwnerCommandOutput extends AssociateCapacityReservationBillingOwnerResult, __MetadataBearer {
}
declare const AssociateCapacityReservationBillingOwnerCommand_base: {
    new (input: AssociateCapacityReservationBillingOwnerCommandInput): import("@smithy/smithy-client").CommandImpl<AssociateCapacityReservationBillingOwnerCommandInput, AssociateCapacityReservationBillingOwnerCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    new (input: AssociateCapacityReservationBillingOwnerCommandInput): import("@smithy/smithy-client").CommandImpl<AssociateCapacityReservationBillingOwnerCommandInput, AssociateCapacityReservationBillingOwnerCommandOutput, EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * <p>Initiates a request to assign billing of the unused capacity of a shared Capacity
 * 			Reservation to a consumer account that is consolidated under the same Amazon Web Services
 * 			organizations payer account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/assign-billing.html">Billing assignment for shared
 * 					Amazon EC2 Capacity Reservations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateCapacityReservationBillingOwnerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateCapacityReservationBillingOwnerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssociateCapacityReservationBillingOwnerRequest
 *   DryRun: true || false,
 *   CapacityReservationId: "STRING_VALUE", // required
 *   UnusedReservationBillingOwnerId: "STRING_VALUE", // required
 * };
 * const command = new AssociateCapacityReservationBillingOwnerCommand(input);
 * const response = await client.send(command);
 * // { // AssociateCapacityReservationBillingOwnerResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param AssociateCapacityReservationBillingOwnerCommandInput - {@link AssociateCapacityReservationBillingOwnerCommandInput}
 * @returns {@link AssociateCapacityReservationBillingOwnerCommandOutput}
 * @see {@link AssociateCapacityReservationBillingOwnerCommandInput} for command's `input` shape.
 * @see {@link AssociateCapacityReservationBillingOwnerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export declare class AssociateCapacityReservationBillingOwnerCommand extends AssociateCapacityReservationBillingOwnerCommand_base {
    /** @internal type navigation helper, not in runtime. */
    protected static __types: {
        api: {
            input: AssociateCapacityReservationBillingOwnerRequest;
            output: AssociateCapacityReservationBillingOwnerResult;
        };
        sdk: {
            input: AssociateCapacityReservationBillingOwnerCommandInput;
            output: AssociateCapacityReservationBillingOwnerCommandOutput;
        };
    };
}
