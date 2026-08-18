import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTrafficMirrorTarget$ } from "../schemas/schemas_0";
export { $Command };
export class CreateTrafficMirrorTargetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateTrafficMirrorTarget", {})
    .n("EC2Client", "CreateTrafficMirrorTargetCommand")
    .sc(CreateTrafficMirrorTarget$)
    .build() {
}
