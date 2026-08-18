import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeClientVpnIngress$ } from "../schemas/schemas_0";
export { $Command };
export class RevokeClientVpnIngressCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RevokeClientVpnIngress", {})
    .n("EC2Client", "RevokeClientVpnIngressCommand")
    .sc(RevokeClientVpnIngress$)
    .build() {
}
