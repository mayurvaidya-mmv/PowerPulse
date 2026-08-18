import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImportSnapshotTasks$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeImportSnapshotTasksCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeImportSnapshotTasks", {})
    .n("EC2Client", "DescribeImportSnapshotTasksCommand")
    .sc(DescribeImportSnapshotTasks$)
    .build() {
}
