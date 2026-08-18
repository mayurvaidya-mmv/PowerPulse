import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceConnectEndpoint$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyInstanceConnectEndpointCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyInstanceConnectEndpoint", {})
    .n("EC2Client", "ModifyInstanceConnectEndpointCommand")
    .sc(ModifyInstanceConnectEndpoint$)
    .build() {
}
