import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClientVpnConnections$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeClientVpnConnectionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeClientVpnConnections", {})
    .n("EC2Client", "DescribeClientVpnConnectionsCommand")
    .sc(DescribeClientVpnConnections$)
    .build() {
}
