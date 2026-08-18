import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBundleTasks$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeBundleTasksCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeBundleTasks", {})
    .n("EC2Client", "DescribeBundleTasksCommand")
    .sc(DescribeBundleTasks$)
    .build() {
}
