import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterTransitGatewayMulticastGroupMembers$ } from "../schemas/schemas_0";
export { $Command };
export class DeregisterTransitGatewayMulticastGroupMembersCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeregisterTransitGatewayMulticastGroupMembers", {})
    .n("EC2Client", "DeregisterTransitGatewayMulticastGroupMembersCommand")
    .sc(DeregisterTransitGatewayMulticastGroupMembers$)
    .build() {
}
