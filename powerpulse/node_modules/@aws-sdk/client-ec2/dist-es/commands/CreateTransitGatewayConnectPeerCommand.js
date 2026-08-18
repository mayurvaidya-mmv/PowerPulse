import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTransitGatewayConnectPeer$ } from "../schemas/schemas_0";
export { $Command };
export class CreateTransitGatewayConnectPeerCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateTransitGatewayConnectPeer", {})
    .n("EC2Client", "CreateTransitGatewayConnectPeerCommand")
    .sc(CreateTransitGatewayConnectPeer$)
    .build() {
}
