import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptTransitGatewayMulticastDomainAssociations$ } from "../schemas/schemas_0";
export { $Command };
export class AcceptTransitGatewayMulticastDomainAssociationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AcceptTransitGatewayMulticastDomainAssociations", {})
    .n("EC2Client", "AcceptTransitGatewayMulticastDomainAssociationsCommand")
    .sc(AcceptTransitGatewayMulticastDomainAssociations$)
    .build() {
}
