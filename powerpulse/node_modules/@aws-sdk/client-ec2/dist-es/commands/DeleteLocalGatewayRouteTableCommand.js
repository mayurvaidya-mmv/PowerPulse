import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLocalGatewayRouteTable$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteLocalGatewayRouteTableCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteLocalGatewayRouteTable", {})
    .n("EC2Client", "DeleteLocalGatewayRouteTableCommand")
    .sc(DeleteLocalGatewayRouteTable$)
    .build() {
}
