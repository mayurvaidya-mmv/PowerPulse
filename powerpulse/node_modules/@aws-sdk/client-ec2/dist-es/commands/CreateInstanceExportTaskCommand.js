import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInstanceExportTask$ } from "../schemas/schemas_0";
export { $Command };
export class CreateInstanceExportTaskCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateInstanceExportTask", {})
    .n("EC2Client", "CreateInstanceExportTaskCommand")
    .sc(CreateInstanceExportTask$)
    .build() {
}
