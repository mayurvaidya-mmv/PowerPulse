import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTransitGatewayRouteTableAnnouncement$ } from "../schemas/schemas_0";
export { $Command };
export class CreateTransitGatewayRouteTableAnnouncementCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateTransitGatewayRouteTableAnnouncement", {})
    .n("EC2Client", "CreateTransitGatewayRouteTableAnnouncementCommand")
    .sc(CreateTransitGatewayRouteTableAnnouncement$)
    .build() {
}
