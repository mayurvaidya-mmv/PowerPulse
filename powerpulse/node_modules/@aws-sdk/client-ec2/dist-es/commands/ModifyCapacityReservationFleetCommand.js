import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyCapacityReservationFleet$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyCapacityReservationFleetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyCapacityReservationFleet", {})
    .n("EC2Client", "ModifyCapacityReservationFleetCommand")
    .sc(ModifyCapacityReservationFleet$)
    .build() {
}
