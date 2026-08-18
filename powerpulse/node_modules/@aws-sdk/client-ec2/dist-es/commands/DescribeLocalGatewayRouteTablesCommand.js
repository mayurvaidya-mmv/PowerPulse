import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLocalGatewayRouteTables$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeLocalGatewayRouteTablesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeLocalGatewayRouteTables", {})
    .n("EC2Client", "DescribeLocalGatewayRouteTablesCommand")
    .sc(DescribeLocalGatewayRouteTables$)
    .build() {
}
