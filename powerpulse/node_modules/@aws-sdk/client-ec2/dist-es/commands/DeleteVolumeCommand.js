import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVolume$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteVolumeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteVolume", {})
    .n("EC2Client", "DeleteVolumeCommand")
    .sc(DeleteVolume$)
    .build() {
}
