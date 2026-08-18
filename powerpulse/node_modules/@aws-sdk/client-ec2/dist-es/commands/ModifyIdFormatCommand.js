import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIdFormat$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyIdFormatCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyIdFormat", {})
    .n("EC2Client", "ModifyIdFormatCommand")
    .sc(ModifyIdFormat$)
    .build() {
}
