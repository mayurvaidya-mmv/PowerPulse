import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SendDiagnosticInterrupt$ } from "../schemas/schemas_0";
export { $Command };
export class SendDiagnosticInterruptCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "SendDiagnosticInterrupt", {})
    .n("EC2Client", "SendDiagnosticInterruptCommand")
    .sc(SendDiagnosticInterrupt$)
    .build() {
}
