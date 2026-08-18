import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetNetworkInterfaceAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class ResetNetworkInterfaceAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ResetNetworkInterfaceAttribute", {})
    .n("EC2Client", "ResetNetworkInterfaceAttributeCommand")
    .sc(ResetNetworkInterfaceAttribute$)
    .build() {
}
