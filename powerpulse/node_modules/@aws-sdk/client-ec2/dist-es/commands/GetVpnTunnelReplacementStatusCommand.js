import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVpnTunnelReplacementStatus$ } from "../schemas/schemas_0";
export { $Command };
export class GetVpnTunnelReplacementStatusCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetVpnTunnelReplacementStatus", {})
    .n("EC2Client", "GetVpnTunnelReplacementStatusCommand")
    .sc(GetVpnTunnelReplacementStatus$)
    .build() {
}
