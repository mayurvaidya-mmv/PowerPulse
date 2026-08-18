import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateClientVpnRoute$ } from "../schemas/schemas_0";
export { $Command };
export class CreateClientVpnRouteCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateClientVpnRoute", {})
    .n("EC2Client", "CreateClientVpnRouteCommand")
    .sc(CreateClientVpnRoute$)
    .build() {
}
