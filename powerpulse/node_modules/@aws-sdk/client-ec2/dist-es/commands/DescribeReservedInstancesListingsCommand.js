import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeReservedInstancesListings$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeReservedInstancesListingsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeReservedInstancesListings", {})
    .n("EC2Client", "DescribeReservedInstancesListingsCommand")
    .sc(DescribeReservedInstancesListings$)
    .build() {
}
