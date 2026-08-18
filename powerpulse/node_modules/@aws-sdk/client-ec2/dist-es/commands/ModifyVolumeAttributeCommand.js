import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVolumeAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVolumeAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVolumeAttribute", {})
    .n("EC2Client", "ModifyVolumeAttributeCommand")
    .sc(ModifyVolumeAttribute$)
    .build() {
}
