import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { TerminateClientVpnConnections$ } from "../schemas/schemas_0";
export { $Command };
export class TerminateClientVpnConnectionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "TerminateClientVpnConnections", {})
    .n("EC2Client", "TerminateClientVpnConnectionsCommand")
    .sc(TerminateClientVpnConnections$)
    .build() {
}
