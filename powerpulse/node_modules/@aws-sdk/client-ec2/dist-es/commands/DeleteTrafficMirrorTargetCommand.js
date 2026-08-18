import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTrafficMirrorTarget$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteTrafficMirrorTargetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteTrafficMirrorTarget", {})
    .n("EC2Client", "DeleteTrafficMirrorTargetCommand")
    .sc(DeleteTrafficMirrorTarget$)
    .build() {
}
