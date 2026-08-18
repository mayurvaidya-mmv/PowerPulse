import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableTransitGatewayRouteTablePropagation$ } from "../schemas/schemas_0";
export { $Command };
export class EnableTransitGatewayRouteTablePropagationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableTransitGatewayRouteTablePropagation", {})
    .n("EC2Client", "EnableTransitGatewayRouteTablePropagationCommand")
    .sc(EnableTransitGatewayRouteTablePropagation$)
    .build() {
}
