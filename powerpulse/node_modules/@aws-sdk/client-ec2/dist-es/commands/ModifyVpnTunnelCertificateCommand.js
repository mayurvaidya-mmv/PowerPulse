import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVpnTunnelCertificate$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVpnTunnelCertificateCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVpnTunnelCertificate", {})
    .n("EC2Client", "ModifyVpnTunnelCertificateCommand")
    .sc(ModifyVpnTunnelCertificate$)
    .build() {
}
