import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRegions$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeRegionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeRegions", {})
    .n("EC2Client", "DescribeRegionsCommand")
    .sc(DescribeRegions$)
    .build() {
}
