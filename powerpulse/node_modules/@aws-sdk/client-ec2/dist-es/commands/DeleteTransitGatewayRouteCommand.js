import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransitGatewayRoute$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteTransitGatewayRouteCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteTransitGatewayRoute", {})
    .n("EC2Client", "DeleteTransitGatewayRouteCommand")
    .sc(DeleteTransitGatewayRoute$)
    .build() {
}
