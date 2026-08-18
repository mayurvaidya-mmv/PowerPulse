import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetachVolume$ } from "../schemas/schemas_0";
export { $Command };
export class DetachVolumeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DetachVolume", {})
    .n("EC2Client", "DetachVolumeCommand")
    .sc(DetachVolume$)
    .build() {
}
