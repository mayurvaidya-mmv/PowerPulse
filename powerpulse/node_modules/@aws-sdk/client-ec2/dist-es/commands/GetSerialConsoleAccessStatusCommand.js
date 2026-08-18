import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSerialConsoleAccessStatus$ } from "../schemas/schemas_0";
export { $Command };
export class GetSerialConsoleAccessStatusCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetSerialConsoleAccessStatus", {})
    .n("EC2Client", "GetSerialConsoleAccessStatusCommand")
    .sc(GetSerialConsoleAccessStatus$)
    .build() {
}
