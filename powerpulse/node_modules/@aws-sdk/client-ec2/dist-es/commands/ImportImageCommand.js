import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ImportImage$ } from "../schemas/schemas_0";
export { $Command };
export class ImportImageCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ImportImage", {})
    .n("EC2Client", "ImportImageCommand")
    .sc(ImportImage$)
    .build() {
}
