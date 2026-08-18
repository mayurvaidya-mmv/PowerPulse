import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeInstanceAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeInstanceAttribute", {})
    .n("EC2Client", "DescribeInstanceAttributeCommand")
    .sc(DescribeInstanceAttribute$)
    .build() {
}
