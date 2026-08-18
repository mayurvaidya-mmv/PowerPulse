import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInterruptibleCapacityReservationAllocation$ } from "../schemas/schemas_0";
export { $Command };
export class CreateInterruptibleCapacityReservationAllocationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateInterruptibleCapacityReservationAllocation", {})
    .n("EC2Client", "CreateInterruptibleCapacityReservationAllocationCommand")
    .sc(CreateInterruptibleCapacityReservationAllocation$)
    .build() {
}
