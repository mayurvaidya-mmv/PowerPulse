import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLocalGatewayRoute$ } from "../schemas/schemas_0";
export { $Command };
export class CreateLocalGatewayRouteCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateLocalGatewayRoute", {})
    .n("EC2Client", "CreateLocalGatewayRouteCommand")
    .sc(CreateLocalGatewayRoute$)
    .build() {
}
