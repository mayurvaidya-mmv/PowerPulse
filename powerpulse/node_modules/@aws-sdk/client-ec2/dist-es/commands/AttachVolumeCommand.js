import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachVolume$ } from "../schemas/schemas_0";
export { $Command };
export class AttachVolumeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AttachVolume", {})
    .n("EC2Client", "AttachVolumeCommand")
    .sc(AttachVolume$)
    .build() {
}
