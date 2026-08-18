import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreVolumeFromRecycleBin$ } from "../schemas/schemas_0";
export { $Command };
export class RestoreVolumeFromRecycleBinCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RestoreVolumeFromRecycleBin", {})
    .n("EC2Client", "RestoreVolumeFromRecycleBinCommand")
    .sc(RestoreVolumeFromRecycleBin$)
    .build() {
}
