import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVolume$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVolumeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVolume", {})
    .n("EC2Client", "ModifyVolumeCommand")
    .sc(ModifyVolume$)
    .build() {
}
