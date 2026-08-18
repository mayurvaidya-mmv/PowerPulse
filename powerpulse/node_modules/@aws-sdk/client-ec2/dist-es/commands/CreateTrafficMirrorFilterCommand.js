import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTrafficMirrorFilter$ } from "../schemas/schemas_0";
export { $Command };
export class CreateTrafficMirrorFilterCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateTrafficMirrorFilter", {})
    .n("EC2Client", "CreateTrafficMirrorFilterCommand")
    .sc(CreateTrafficMirrorFilter$)
    .build() {
}
