import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClassicLinkInstances$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeClassicLinkInstancesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeClassicLinkInstances", {})
    .n("EC2Client", "DescribeClassicLinkInstancesCommand")
    .sc(DescribeClassicLinkInstances$)
    .build() {
}
