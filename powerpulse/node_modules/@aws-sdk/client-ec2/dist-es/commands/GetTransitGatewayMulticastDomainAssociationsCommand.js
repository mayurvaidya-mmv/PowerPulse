import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTransitGatewayMulticastDomainAssociations$ } from "../schemas/schemas_0";
export { $Command };
export class GetTransitGatewayMulticastDomainAssociationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetTransitGatewayMulticastDomainAssociations", {})
    .n("EC2Client", "GetTransitGatewayMulticastDomainAssociationsCommand")
    .sc(GetTransitGatewayMulticastDomainAssociations$)
    .build() {
}
