import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAvailabilityZones$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeAvailabilityZonesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeAvailabilityZones", {})
    .n("EC2Client", "DescribeAvailabilityZonesCommand")
    .sc(DescribeAvailabilityZones$)
    .build() {
}
