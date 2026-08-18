import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransitGatewayVpcAttachment$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteTransitGatewayVpcAttachmentCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteTransitGatewayVpcAttachment", {})
    .n("EC2Client", "DeleteTransitGatewayVpcAttachmentCommand")
    .sc(DeleteTransitGatewayVpcAttachment$)
    .build() {
}
