import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVerifiedAccessInstances$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVerifiedAccessInstancesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVerifiedAccessInstances", {})
    .n("EC2Client", "DescribeVerifiedAccessInstancesCommand")
    .sc(DescribeVerifiedAccessInstances$)
    .build() {
}
