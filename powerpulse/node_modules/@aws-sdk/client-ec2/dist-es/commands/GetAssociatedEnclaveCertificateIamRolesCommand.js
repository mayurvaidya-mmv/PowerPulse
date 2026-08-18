import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAssociatedEnclaveCertificateIamRoles$ } from "../schemas/schemas_0";
export { $Command };
export class GetAssociatedEnclaveCertificateIamRolesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetAssociatedEnclaveCertificateIamRoles", {})
    .n("EC2Client", "GetAssociatedEnclaveCertificateIamRolesCommand")
    .sc(GetAssociatedEnclaveCertificateIamRoles$)
    .build() {
}
