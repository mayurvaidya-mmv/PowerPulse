import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHostReservationOfferings$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeHostReservationOfferingsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeHostReservationOfferings", {})
    .n("EC2Client", "DescribeHostReservationOfferingsCommand")
    .sc(DescribeHostReservationOfferings$)
    .build() {
}
