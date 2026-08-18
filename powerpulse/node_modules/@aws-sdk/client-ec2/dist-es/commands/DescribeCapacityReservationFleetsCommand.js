import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCapacityReservationFleets$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeCapacityReservationFleetsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeCapacityReservationFleets", {})
    .n("EC2Client", "DescribeCapacityReservationFleetsCommand")
    .sc(DescribeCapacityReservationFleets$)
    .build() {
}
