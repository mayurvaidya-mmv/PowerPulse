import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyTrafficMirrorSession$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyTrafficMirrorSessionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyTrafficMirrorSession", {})
    .n("EC2Client", "ModifyTrafficMirrorSessionCommand")
    .sc(ModifyTrafficMirrorSession$)
    .build() {
}
