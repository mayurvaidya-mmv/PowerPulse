import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTransitGatewayRoute$ } from "../schemas/schemas_0";
export { $Command };
export class CreateTransitGatewayRouteCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateTransitGatewayRoute", {})
    .n("EC2Client", "CreateTransitGatewayRouteCommand")
    .sc(CreateTransitGatewayRoute$)
    .build() {
}
