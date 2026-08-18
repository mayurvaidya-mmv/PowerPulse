import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyNetworkInterfaceAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyNetworkInterfaceAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyNetworkInterfaceAttribute", {})
    .n("EC2Client", "ModifyNetworkInterfaceAttributeCommand")
    .sc(ModifyNetworkInterfaceAttribute$)
    .build() {
}
