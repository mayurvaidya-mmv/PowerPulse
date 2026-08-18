import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTransitGatewayConnects$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeTransitGatewayConnectsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeTransitGatewayConnects", {})
    .n("EC2Client", "DescribeTransitGatewayConnectsCommand")
    .sc(DescribeTransitGatewayConnects$)
    .build() {
}
