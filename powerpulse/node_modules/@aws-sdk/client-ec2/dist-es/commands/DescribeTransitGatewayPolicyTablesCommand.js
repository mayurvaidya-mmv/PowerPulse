import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTransitGatewayPolicyTables$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeTransitGatewayPolicyTablesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeTransitGatewayPolicyTables", {})
    .n("EC2Client", "DescribeTransitGatewayPolicyTablesCommand")
    .sc(DescribeTransitGatewayPolicyTables$)
    .build() {
}
