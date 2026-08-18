import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RejectCapacityReservationBillingOwnership$ } from "../schemas/schemas_0";
export { $Command };
export class RejectCapacityReservationBillingOwnershipCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RejectCapacityReservationBillingOwnership", {})
    .n("EC2Client", "RejectCapacityReservationBillingOwnershipCommand")
    .sc(RejectCapacityReservationBillingOwnership$)
    .build() {
}
