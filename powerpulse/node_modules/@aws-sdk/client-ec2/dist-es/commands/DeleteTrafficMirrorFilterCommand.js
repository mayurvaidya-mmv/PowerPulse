import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTrafficMirrorFilter$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteTrafficMirrorFilterCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteTrafficMirrorFilter", {})
    .n("EC2Client", "DeleteTrafficMirrorFilterCommand")
    .sc(DeleteTrafficMirrorFilter$)
    .build() {
}
