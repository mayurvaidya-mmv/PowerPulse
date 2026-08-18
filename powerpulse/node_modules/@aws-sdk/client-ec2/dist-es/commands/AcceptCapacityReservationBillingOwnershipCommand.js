import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptCapacityReservationBillingOwnership$ } from "../schemas/schemas_0";
export { $Command };
export class AcceptCapacityReservationBillingOwnershipCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AcceptCapacityReservationBillingOwnership", {})
    .n("EC2Client", "AcceptCapacityReservationBillingOwnershipCommand")
    .sc(AcceptCapacityReservationBillingOwnership$)
    .build() {
}
