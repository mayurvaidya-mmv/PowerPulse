import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConsoleScreenshot$ } from "../schemas/schemas_0";
export { $Command };
export class GetConsoleScreenshotCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetConsoleScreenshot", {})
    .n("EC2Client", "GetConsoleScreenshotCommand")
    .sc(GetConsoleScreenshot$)
    .build() {
}
