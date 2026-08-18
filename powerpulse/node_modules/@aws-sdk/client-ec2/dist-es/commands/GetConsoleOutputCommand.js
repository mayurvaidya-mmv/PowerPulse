import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConsoleOutput$ } from "../schemas/schemas_0";
export { $Command };
export class GetConsoleOutputCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetConsoleOutput", {})
    .n("EC2Client", "GetConsoleOutputCommand")
    .sc(GetConsoleOutput$)
    .build() {
}
