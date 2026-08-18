import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableSerialConsoleAccess$ } from "../schemas/schemas_0";
export { $Command };
export class DisableSerialConsoleAccessCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisableSerialConsoleAccess", {})
    .n("EC2Client", "DisableSerialConsoleAccessCommand")
    .sc(DisableSerialConsoleAccess$)
    .build() {
}
