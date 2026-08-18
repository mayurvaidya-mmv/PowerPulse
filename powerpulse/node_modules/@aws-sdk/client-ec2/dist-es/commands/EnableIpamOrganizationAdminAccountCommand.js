import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableIpamOrganizationAdminAccount$ } from "../schemas/schemas_0";
export { $Command };
export class EnableIpamOrganizationAdminAccountCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableIpamOrganizationAdminAccount", {})
    .n("EC2Client", "EnableIpamOrganizationAdminAccountCommand")
    .sc(EnableIpamOrganizationAdminAccount$)
    .build() {
}
