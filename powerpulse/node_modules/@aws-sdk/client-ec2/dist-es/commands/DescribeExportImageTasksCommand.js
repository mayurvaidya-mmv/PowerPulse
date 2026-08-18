import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeExportImageTasks$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeExportImageTasksCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeExportImageTasks", {})
    .n("EC2Client", "DescribeExportImageTasksCommand")
    .sc(DescribeExportImageTasks$)
    .build() {
}
