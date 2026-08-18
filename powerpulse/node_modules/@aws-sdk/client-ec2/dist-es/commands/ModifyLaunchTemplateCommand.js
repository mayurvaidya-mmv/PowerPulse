import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyLaunchTemplate$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyLaunchTemplateCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyLaunchTemplate", {})
    .n("EC2Client", "ModifyLaunchTemplateCommand")
    .sc(ModifyLaunchTemplate$)
    .build() {
}
