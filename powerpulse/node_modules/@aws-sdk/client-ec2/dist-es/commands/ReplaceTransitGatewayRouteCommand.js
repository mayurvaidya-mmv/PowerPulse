import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceTransitGatewayRoute$ } from "../schemas/schemas_0";
export { $Command };
export class ReplaceTransitGatewayRouteCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ReplaceTransitGatewayRoute", {})
    .n("EC2Client", "ReplaceTransitGatewayRouteCommand")
    .sc(ReplaceTransitGatewayRoute$)
    .build() {
}
