import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyCapacityReservation$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyCapacityReservationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyCapacityReservation", {})
    .n("EC2Client", "ModifyCapacityReservationCommand")
    .sc(ModifyCapacityReservation$)
    .build() {
}
