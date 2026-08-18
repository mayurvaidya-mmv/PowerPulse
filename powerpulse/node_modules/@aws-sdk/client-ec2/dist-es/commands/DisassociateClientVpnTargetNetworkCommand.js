import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateClientVpnTargetNetwork$ } from "../schemas/schemas_0";
export { $Command };
export class DisassociateClientVpnTargetNetworkCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisassociateClientVpnTargetNetwork", {})
    .n("EC2Client", "DisassociateClientVpnTargetNetworkCommand")
    .sc(DisassociateClientVpnTargetNetwork$)
    .build() {
}
