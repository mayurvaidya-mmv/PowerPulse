import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTransitGatewayPeeringAttachments$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeTransitGatewayPeeringAttachmentsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeTransitGatewayPeeringAttachments", {})
    .n("EC2Client", "DescribeTransitGatewayPeeringAttachmentsCommand")
    .sc(DescribeTransitGatewayPeeringAttachments$)
    .build() {
}
