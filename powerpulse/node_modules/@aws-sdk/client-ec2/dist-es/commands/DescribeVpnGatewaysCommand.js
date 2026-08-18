import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpnGateways$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeVpnGatewaysCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeVpnGateways", {})
    .n("EC2Client", "DescribeVpnGatewaysCommand")
    .sc(DescribeVpnGateways$)
    .build() {
}
