import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMacModificationTasks$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeMacModificationTasksCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeMacModificationTasks", {})
    .n("EC2Client", "DescribeMacModificationTasksCommand")
    .sc(DescribeMacModificationTasks$)
    .build() {
}
