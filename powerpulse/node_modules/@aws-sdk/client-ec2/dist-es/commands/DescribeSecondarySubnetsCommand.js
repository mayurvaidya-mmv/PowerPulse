import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecondarySubnets$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSecondarySubnetsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSecondarySubnets", {})
    .n("EC2Client", "DescribeSecondarySubnetsCommand")
    .sc(DescribeSecondarySubnets$)
    .build() {
}
