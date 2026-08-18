import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceVpnTunnel$ } from "../schemas/schemas_0";
export { $Command };
export class ReplaceVpnTunnelCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ReplaceVpnTunnel", {})
    .n("EC2Client", "ReplaceVpnTunnelCommand")
    .sc(ReplaceVpnTunnel$)
    .build() {
}
