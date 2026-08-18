import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableTransitGatewayRouteTablePropagation$ } from "../schemas/schemas_0";
export { $Command };
export class DisableTransitGatewayRouteTablePropagationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisableTransitGatewayRouteTablePropagation", {})
    .n("EC2Client", "DisableTransitGatewayRouteTablePropagationCommand")
    .sc(DisableTransitGatewayRouteTablePropagation$)
    .build() {
}
