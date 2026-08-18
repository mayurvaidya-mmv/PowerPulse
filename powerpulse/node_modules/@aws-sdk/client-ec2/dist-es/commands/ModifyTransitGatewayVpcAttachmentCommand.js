import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyTransitGatewayVpcAttachment$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyTransitGatewayVpcAttachmentCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyTransitGatewayVpcAttachment", {})
    .n("EC2Client", "ModifyTransitGatewayVpcAttachmentCommand")
    .sc(ModifyTransitGatewayVpcAttachment$)
    .build() {
}
