import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNatGateways$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeNatGatewaysCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeNatGateways", {})
    .n("EC2Client", "DescribeNatGatewaysCommand")
    .sc(DescribeNatGateways$)
    .build() {
}
