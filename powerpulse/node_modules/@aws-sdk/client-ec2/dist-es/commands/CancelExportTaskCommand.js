import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelExportTask$ } from "../schemas/schemas_0";
export { $Command };
export class CancelExportTaskCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CancelExportTask", {})
    .n("EC2Client", "CancelExportTaskCommand")
    .sc(CancelExportTask$)
    .build() {
}
