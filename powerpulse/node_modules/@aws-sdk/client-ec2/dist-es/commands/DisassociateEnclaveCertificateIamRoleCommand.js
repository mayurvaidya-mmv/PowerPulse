import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateEnclaveCertificateIamRole$ } from "../schemas/schemas_0";
export { $Command };
export class DisassociateEnclaveCertificateIamRoleCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisassociateEnclaveCertificateIamRole", {})
    .n("EC2Client", "DisassociateEnclaveCertificateIamRoleCommand")
    .sc(DisassociateEnclaveCertificateIamRole$)
    .build() {
}
