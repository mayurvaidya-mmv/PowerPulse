import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyFpgaImageAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyFpgaImageAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyFpgaImageAttribute", {})
    .n("EC2Client", "ModifyFpgaImageAttributeCommand")
    .sc(ModifyFpgaImageAttribute$)
    .build() {
}
