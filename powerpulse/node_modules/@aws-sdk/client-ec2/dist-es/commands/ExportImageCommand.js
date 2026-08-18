import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportImage$ } from "../schemas/schemas_0";
export { $Command };
export class ExportImageCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ExportImage", {})
    .n("EC2Client", "ExportImageCommand")
    .sc(ExportImage$)
    .build() {
}
