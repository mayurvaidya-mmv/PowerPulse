import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTransitGatewayRouteTables$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeTransitGatewayRouteTablesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeTransitGatewayRouteTables", {})
    .n("EC2Client", "DescribeTransitGatewayRouteTablesCommand")
    .sc(DescribeTransitGatewayRouteTables$)
    .build() {
}
