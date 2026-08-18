import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateCapacityReservationBillingOwner$ } from "../schemas/schemas_0";
export { $Command };
export class DisassociateCapacityReservationBillingOwnerCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisassociateCapacityReservationBillingOwner", {})
    .n("EC2Client", "DisassociateCapacityReservationBillingOwnerCommand")
    .sc(DisassociateCapacityReservationBillingOwner$)
    .build() {
}
