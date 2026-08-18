import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImageAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeImageAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeImageAttribute", {})
    .n("EC2Client", "DescribeImageAttributeCommand")
    .sc(DescribeImageAttribute$)
    .build() {
}
