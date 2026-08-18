import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCapacityReservationTopology$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeCapacityReservationTopologyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeCapacityReservationTopology", {})
    .n("EC2Client", "DescribeCapacityReservationTopologyCommand")
    .sc(DescribeCapacityReservationTopology$)
    .build() {
}
