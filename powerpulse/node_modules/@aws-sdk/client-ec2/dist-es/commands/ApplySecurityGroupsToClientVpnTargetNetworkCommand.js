import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ApplySecurityGroupsToClientVpnTargetNetwork$ } from "../schemas/schemas_0";
export { $Command };
export class ApplySecurityGroupsToClientVpnTargetNetworkCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ApplySecurityGroupsToClientVpnTargetNetwork", {})
    .n("EC2Client", "ApplySecurityGroupsToClientVpnTargetNetworkCommand")
    .sc(ApplySecurityGroupsToClientVpnTargetNetwork$)
    .build() {
}
