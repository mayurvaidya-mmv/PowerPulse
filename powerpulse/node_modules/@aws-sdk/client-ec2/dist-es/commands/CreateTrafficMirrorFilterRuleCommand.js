import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTrafficMirrorFilterRule$ } from "../schemas/schemas_0";
export { $Command };
export class CreateTrafficMirrorFilterRuleCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateTrafficMirrorFilterRule", {})
    .n("EC2Client", "CreateTrafficMirrorFilterRuleCommand")
    .sc(CreateTrafficMirrorFilterRule$)
    .build() {
}
