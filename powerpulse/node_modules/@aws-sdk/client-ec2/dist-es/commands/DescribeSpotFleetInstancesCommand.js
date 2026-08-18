import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSpotFleetInstances$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSpotFleetInstancesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSpotFleetInstances", {})
    .n("EC2Client", "DescribeSpotFleetInstancesCommand")
    .sc(DescribeSpotFleetInstances$)
    .build() {
}
