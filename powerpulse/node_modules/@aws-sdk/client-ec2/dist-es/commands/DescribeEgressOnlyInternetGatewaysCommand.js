import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEgressOnlyInternetGateways$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeEgressOnlyInternetGatewaysCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeEgressOnlyInternetGateways", {})
    .n("EC2Client", "DescribeEgressOnlyInternetGatewaysCommand")
    .sc(DescribeEgressOnlyInternetGateways$)
    .build() {
}
