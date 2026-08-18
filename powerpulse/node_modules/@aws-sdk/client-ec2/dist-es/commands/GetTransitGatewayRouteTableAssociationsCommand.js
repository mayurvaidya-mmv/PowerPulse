import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTransitGatewayRouteTableAssociations$ } from "../schemas/schemas_0";
export { $Command };
export class GetTransitGatewayRouteTableAssociationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetTransitGatewayRouteTableAssociations", {})
    .n("EC2Client", "GetTransitGatewayRouteTableAssociationsCommand")
    .sc(GetTransitGatewayRouteTableAssociations$)
    .build() {
}
