import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTransitGatewayRouteTableAnnouncements$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeTransitGatewayRouteTableAnnouncementsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeTransitGatewayRouteTableAnnouncements", {})
    .n("EC2Client", "DescribeTransitGatewayRouteTableAnnouncementsCommand")
    .sc(DescribeTransitGatewayRouteTableAnnouncements$)
    .build() {
}
