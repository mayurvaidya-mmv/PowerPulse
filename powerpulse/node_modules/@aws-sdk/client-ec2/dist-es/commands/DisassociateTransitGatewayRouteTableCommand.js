import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateTransitGatewayRouteTable$ } from "../schemas/schemas_0";
export { $Command };
export class DisassociateTransitGatewayRouteTableCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisassociateTransitGatewayRouteTable", {})
    .n("EC2Client", "DisassociateTransitGatewayRouteTableCommand")
    .sc(DisassociateTransitGatewayRouteTable$)
    .build() {
}
