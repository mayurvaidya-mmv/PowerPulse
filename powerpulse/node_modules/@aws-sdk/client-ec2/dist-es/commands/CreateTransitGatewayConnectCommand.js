import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTransitGatewayConnect$ } from "../schemas/schemas_0";
export { $Command };
export class CreateTransitGatewayConnectCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateTransitGatewayConnect", {})
    .n("EC2Client", "CreateTransitGatewayConnectCommand")
    .sc(CreateTransitGatewayConnect$)
    .build() {
}
