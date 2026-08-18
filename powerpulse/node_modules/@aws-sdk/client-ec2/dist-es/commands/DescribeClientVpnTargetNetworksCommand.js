import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClientVpnTargetNetworks$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeClientVpnTargetNetworksCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeClientVpnTargetNetworks", {})
    .n("EC2Client", "DescribeClientVpnTargetNetworksCommand")
    .sc(DescribeClientVpnTargetNetworks$)
    .build() {
}
