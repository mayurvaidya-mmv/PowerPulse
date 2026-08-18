import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTransitGatewayVpcAttachments$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeTransitGatewayVpcAttachmentsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeTransitGatewayVpcAttachments", {})
    .n("EC2Client", "DescribeTransitGatewayVpcAttachmentsCommand")
    .sc(DescribeTransitGatewayVpcAttachments$)
    .build() {
}
