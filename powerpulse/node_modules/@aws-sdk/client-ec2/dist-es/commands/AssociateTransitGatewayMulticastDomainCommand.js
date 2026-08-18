import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateTransitGatewayMulticastDomain$ } from "../schemas/schemas_0";
export { $Command };
export class AssociateTransitGatewayMulticastDomainCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssociateTransitGatewayMulticastDomain", {})
    .n("EC2Client", "AssociateTransitGatewayMulticastDomainCommand")
    .sc(AssociateTransitGatewayMulticastDomain$)
    .build() {
}
