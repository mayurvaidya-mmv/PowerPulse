import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ImportClientVpnClientCertificateRevocationList$ } from "../schemas/schemas_0";
export { $Command };
export class ImportClientVpnClientCertificateRevocationListCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ImportClientVpnClientCertificateRevocationList", {})
    .n("EC2Client", "ImportClientVpnClientCertificateRevocationListCommand")
    .sc(ImportClientVpnClientCertificateRevocationList$)
    .build() {
}
