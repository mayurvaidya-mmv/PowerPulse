import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableFastLaunch$ } from "../schemas/schemas_0";
export { $Command };
export class EnableFastLaunchCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableFastLaunch", {})
    .n("EC2Client", "EnableFastLaunchCommand")
    .sc(EnableFastLaunch$)
    .build() {
}
