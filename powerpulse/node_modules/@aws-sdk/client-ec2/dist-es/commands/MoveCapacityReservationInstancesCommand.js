import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { MoveCapacityReservationInstances$ } from "../schemas/schemas_0";
export { $Command };
export class MoveCapacityReservationInstancesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "MoveCapacityReservationInstances", {})
    .n("EC2Client", "MoveCapacityReservationInstancesCommand")
    .sc(MoveCapacityReservationInstances$)
    .build() {
}
