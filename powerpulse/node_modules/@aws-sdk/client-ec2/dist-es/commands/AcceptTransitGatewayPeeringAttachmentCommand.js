import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptTransitGatewayPeeringAttachment$ } from "../schemas/schemas_0";
export { $Command };
export class AcceptTransitGatewayPeeringAttachmentCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AcceptTransitGatewayPeeringAttachment", {})
    .n("EC2Client", "AcceptTransitGatewayPeeringAttachmentCommand")
    .sc(AcceptTransitGatewayPeeringAttachment$)
    .build() {
}
