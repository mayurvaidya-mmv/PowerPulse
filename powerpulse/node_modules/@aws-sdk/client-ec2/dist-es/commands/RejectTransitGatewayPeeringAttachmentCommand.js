import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RejectTransitGatewayPeeringAttachment$ } from "../schemas/schemas_0";
export { $Command };
export class RejectTransitGatewayPeeringAttachmentCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RejectTransitGatewayPeeringAttachment", {})
    .n("EC2Client", "RejectTransitGatewayPeeringAttachmentCommand")
    .sc(RejectTransitGatewayPeeringAttachment$)
    .build() {
}
