import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableSerialConsoleAccess$ } from "../schemas/schemas_0";
export { $Command };
export class EnableSerialConsoleAccessCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableSerialConsoleAccess", {})
    .n("EC2Client", "EnableSerialConsoleAccessCommand")
    .sc(EnableSerialConsoleAccess$)
    .build() {
}
