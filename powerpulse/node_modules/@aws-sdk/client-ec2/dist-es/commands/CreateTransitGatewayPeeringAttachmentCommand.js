import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTransitGatewayPeeringAttachment$ } from "../schemas/schemas_0";
export { $Command };
export class CreateTransitGatewayPeeringAttachmentCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateTransitGatewayPeeringAttachment", {})
    .n("EC2Client", "CreateTransitGatewayPeeringAttachmentCommand")
    .sc(CreateTransitGatewayPeeringAttachment$)
    .build() {
}
