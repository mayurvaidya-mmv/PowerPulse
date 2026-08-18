import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ImportInstance$ } from "../schemas/schemas_0";
export { $Command };
export class ImportInstanceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ImportInstance", {})
    .n("EC2Client", "ImportInstanceCommand")
    .sc(ImportInstance$)
    .build() {
}
