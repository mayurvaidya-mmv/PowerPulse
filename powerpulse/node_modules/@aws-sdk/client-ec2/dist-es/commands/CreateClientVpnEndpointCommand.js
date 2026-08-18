import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateClientVpnEndpoint$ } from "../schemas/schemas_0";
export { $Command };
export class CreateClientVpnEndpointCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateClientVpnEndpoint", {})
    .n("EC2Client", "CreateClientVpnEndpointCommand")
    .sc(CreateClientVpnEndpoint$)
    .build() {
}
