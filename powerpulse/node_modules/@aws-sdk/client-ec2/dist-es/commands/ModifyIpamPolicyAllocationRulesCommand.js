import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIpamPolicyAllocationRules$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyIpamPolicyAllocationRulesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyIpamPolicyAllocationRules", {})
    .n("EC2Client", "ModifyIpamPolicyAllocationRulesCommand")
    .sc(ModifyIpamPolicyAllocationRules$)
    .build() {
}
