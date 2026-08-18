import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetachNetworkInterface$ } from "../schemas/schemas_0";
export { $Command };
export class DetachNetworkInterfaceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DetachNetworkInterface", {})
    .n("EC2Client", "DetachNetworkInterfaceCommand")
    .sc(DetachNetworkInterface$)
    .build() {
}
