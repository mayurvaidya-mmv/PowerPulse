import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTransitGatewayMeteringPolicies$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeTransitGatewayMeteringPoliciesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeTransitGatewayMeteringPolicies", {})
    .n("EC2Client", "DescribeTransitGatewayMeteringPoliciesCommand")
    .sc(DescribeTransitGatewayMeteringPolicies$)
    .build() {
}
