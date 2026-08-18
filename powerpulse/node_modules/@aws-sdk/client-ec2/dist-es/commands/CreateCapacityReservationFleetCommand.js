import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCapacityReservationFleet$ } from "../schemas/schemas_0";
export { $Command };
export class CreateCapacityReservationFleetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateCapacityReservationFleet", {})
    .n("EC2Client", "CreateCapacityReservationFleetCommand")
    .sc(CreateCapacityReservationFleet$)
    .build() {
}
