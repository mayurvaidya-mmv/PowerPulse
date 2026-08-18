import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCapacityReservations$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeCapacityReservationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeCapacityReservations", {})
    .n("EC2Client", "DescribeCapacityReservationsCommand")
    .sc(DescribeCapacityReservations$)
    .build() {
}
