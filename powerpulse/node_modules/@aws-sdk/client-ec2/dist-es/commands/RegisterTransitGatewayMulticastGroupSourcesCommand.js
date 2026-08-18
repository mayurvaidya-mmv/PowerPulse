import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterTransitGatewayMulticastGroupSources$ } from "../schemas/schemas_0";
export { $Command };
export class RegisterTransitGatewayMulticastGroupSourcesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RegisterTransitGatewayMulticastGroupSources", {})
    .n("EC2Client", "RegisterTransitGatewayMulticastGroupSourcesCommand")
    .sc(RegisterTransitGatewayMulticastGroupSources$)
    .build() {
}
