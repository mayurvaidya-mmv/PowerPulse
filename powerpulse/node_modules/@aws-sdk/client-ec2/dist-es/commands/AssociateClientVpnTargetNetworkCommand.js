import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateClientVpnTargetNetwork$ } from "../schemas/schemas_0";
export { $Command };
export class AssociateClientVpnTargetNetworkCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssociateClientVpnTargetNetwork", {})
    .n("EC2Client", "AssociateClientVpnTargetNetworkCommand")
    .sc(AssociateClientVpnTargetNetwork$)
    .build() {
}
