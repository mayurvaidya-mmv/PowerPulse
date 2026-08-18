import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopyImage$ } from "../schemas/schemas_0";
export { $Command };
export class CopyImageCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CopyImage", {})
    .n("EC2Client", "CopyImageCommand")
    .sc(CopyImage$)
    .build() {
}
