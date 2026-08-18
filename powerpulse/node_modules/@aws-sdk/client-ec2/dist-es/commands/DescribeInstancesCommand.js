import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstances$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeInstancesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeInstances", {})
    .n("EC2Client", "DescribeInstancesCommand")
    .sc(DescribeInstances$)
    .build() {
}
