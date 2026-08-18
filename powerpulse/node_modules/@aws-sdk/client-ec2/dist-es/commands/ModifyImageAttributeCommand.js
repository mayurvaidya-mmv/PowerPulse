import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyImageAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyImageAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyImageAttribute", {})
    .n("EC2Client", "ModifyImageAttributeCommand")
    .sc(ModifyImageAttribute$)
    .build() {
}
