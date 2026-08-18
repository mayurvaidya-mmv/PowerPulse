import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSubnetCidrReservations$ } from "../schemas/schemas_0";
export { $Command };
export class GetSubnetCidrReservationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetSubnetCidrReservations", {})
    .n("EC2Client", "GetSubnetCidrReservationsCommand")
    .sc(GetSubnetCidrReservations$)
    .build() {
}
