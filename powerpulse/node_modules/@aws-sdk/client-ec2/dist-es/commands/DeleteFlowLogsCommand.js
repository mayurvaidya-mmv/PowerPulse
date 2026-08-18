import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFlowLogs$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteFlowLogsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteFlowLogs", {})
    .n("EC2Client", "DeleteFlowLogsCommand")
    .sc(DeleteFlowLogs$)
    .build() {
}
