import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyLocalGatewayRoute$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyLocalGatewayRouteCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyLocalGatewayRoute", {})
    .n("EC2Client", "ModifyLocalGatewayRouteCommand")
    .sc(ModifyLocalGatewayRoute$)
    .build() {
}
