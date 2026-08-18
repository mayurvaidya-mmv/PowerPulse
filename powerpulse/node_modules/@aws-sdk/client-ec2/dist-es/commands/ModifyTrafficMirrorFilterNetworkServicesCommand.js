import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyTrafficMirrorFilterNetworkServices$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyTrafficMirrorFilterNetworkServicesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyTrafficMirrorFilterNetworkServices", {})
    .n("EC2Client", "ModifyTrafficMirrorFilterNetworkServicesCommand")
    .sc(ModifyTrafficMirrorFilterNetworkServices$)
    .build() {
}
