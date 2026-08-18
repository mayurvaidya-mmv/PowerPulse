import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifySecurityGroupRules$ } from "../schemas/schemas_0";
export { $Command };
export class ModifySecurityGroupRulesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifySecurityGroupRules", {})
    .n("EC2Client", "ModifySecurityGroupRulesCommand")
    .sc(ModifySecurityGroupRules$)
    .build() {
}
