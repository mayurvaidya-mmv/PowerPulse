import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeReplaceRootVolumeTasks$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeReplaceRootVolumeTasksCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeReplaceRootVolumeTasks", {})
    .n("EC2Client", "DescribeReplaceRootVolumeTasksCommand")
    .sc(DescribeReplaceRootVolumeTasks$)
    .build() {
}
