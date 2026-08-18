import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImportImageTasks$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeImportImageTasksCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeImportImageTasks", {})
    .n("EC2Client", "DescribeImportImageTasksCommand")
    .sc(DescribeImportImageTasks$)
    .build() {
}
