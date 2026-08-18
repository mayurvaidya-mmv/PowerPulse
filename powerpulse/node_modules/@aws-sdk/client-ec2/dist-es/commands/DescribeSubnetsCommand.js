import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSubnets$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSubnetsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSubnets", {})
    .n("EC2Client", "DescribeSubnetsCommand")
    .sc(DescribeSubnets$)
    .build() {
}
