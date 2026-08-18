import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTransitGateways$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeTransitGatewaysCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeTransitGateways", {})
    .n("EC2Client", "DescribeTransitGatewaysCommand")
    .sc(DescribeTransitGateways$)
    .build() {
}
