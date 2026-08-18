import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetActiveVpnTunnelStatus$ } from "../schemas/schemas_0";
export { $Command };
export class GetActiveVpnTunnelStatusCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetActiveVpnTunnelStatus", {})
    .n("EC2Client", "GetActiveVpnTunnelStatusCommand")
    .sc(GetActiveVpnTunnelStatus$)
    .build() {
}
