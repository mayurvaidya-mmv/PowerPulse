import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTransitGatewayAttachmentPropagations$ } from "../schemas/schemas_0";
export { $Command };
export class GetTransitGatewayAttachmentPropagationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetTransitGatewayAttachmentPropagations", {})
    .n("EC2Client", "GetTransitGatewayAttachmentPropagationsCommand")
    .sc(GetTransitGatewayAttachmentPropagations$)
    .build() {
}
