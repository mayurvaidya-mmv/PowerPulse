import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCapacityReservation$ } from "../schemas/schemas_0";
export { $Command };
export class CreateCapacityReservationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateCapacityReservation", {})
    .n("EC2Client", "CreateCapacityReservationCommand")
    .sc(CreateCapacityReservation$)
    .build() {
}
