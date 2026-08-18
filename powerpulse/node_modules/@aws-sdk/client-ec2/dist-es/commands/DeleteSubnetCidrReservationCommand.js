import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSubnetCidrReservation$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteSubnetCidrReservationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteSubnetCidrReservation", {})
    .n("EC2Client", "DeleteSubnetCidrReservationCommand")
    .sc(DeleteSubnetCidrReservation$)
    .build() {
}
