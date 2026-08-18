import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamPolicyOrganizationTargets$ } from "../schemas/schemas_0";
export { $Command };
export class GetIpamPolicyOrganizationTargetsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetIpamPolicyOrganizationTargets", {})
    .n("EC2Client", "GetIpamPolicyOrganizationTargetsCommand")
    .sc(GetIpamPolicyOrganizationTargets$)
    .build() {
}
