import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CopyVolumes$ } from "../schemas/schemas_0";
export { $Command };
export class CopyVolumesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CopyVolumes", {})
    .n("EC2Client", "CopyVolumesCommand")
    .sc(CopyVolumes$)
    .build() {
}
