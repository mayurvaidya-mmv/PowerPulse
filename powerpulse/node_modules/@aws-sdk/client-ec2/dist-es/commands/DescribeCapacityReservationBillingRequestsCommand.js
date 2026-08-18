import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCapacityReservationBillingRequests$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeCapacityReservationBillingRequestsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeCapacityReservationBillingRequests", {})
    .n("EC2Client", "DescribeCapacityReservationBillingRequestsCommand")
    .sc(DescribeCapacityReservationBillingRequests$)
    .build() {
}
