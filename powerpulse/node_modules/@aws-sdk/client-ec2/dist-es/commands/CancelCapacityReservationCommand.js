import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelCapacityReservation$ } from "../schemas/schemas_0";
export { $Command };
export class CancelCapacityReservationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CancelCapacityReservation", {})
    .n("EC2Client", "CancelCapacityReservationCommand")
    .sc(CancelCapacityReservation$)
    .build() {
}
