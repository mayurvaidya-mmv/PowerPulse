import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVolume$ } from "../schemas/schemas_0";
export { $Command };
export class CreateVolumeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateVolume", {})
    .n("EC2Client", "CreateVolumeCommand")
    .sc(CreateVolume$)
    .build() {
}
