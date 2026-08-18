import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RejectTransitGatewayMulticastDomainAssociations$ } from "../schemas/schemas_0";
export { $Command };
export class RejectTransitGatewayMulticastDomainAssociationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RejectTransitGatewayMulticastDomainAssociations", {})
    .n("EC2Client", "RejectTransitGatewayMulticastDomainAssociationsCommand")
    .sc(RejectTransitGatewayMulticastDomainAssociations$)
    .build() {
}
