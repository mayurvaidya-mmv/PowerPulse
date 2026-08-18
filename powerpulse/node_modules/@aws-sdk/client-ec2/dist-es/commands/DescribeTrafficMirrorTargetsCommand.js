import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTrafficMirrorTargets$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeTrafficMirrorTargetsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeTrafficMirrorTargets", {})
    .n("EC2Client", "DescribeTrafficMirrorTargetsCommand")
    .sc(DescribeTrafficMirrorTargets$)
    .build() {
}
