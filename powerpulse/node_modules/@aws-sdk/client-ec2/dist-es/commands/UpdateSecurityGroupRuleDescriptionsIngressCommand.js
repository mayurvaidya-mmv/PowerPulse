import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSecurityGroupRuleDescriptionsIngress$ } from "../schemas/schemas_0";
export { $Command };
export class UpdateSecurityGroupRuleDescriptionsIngressCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "UpdateSecurityGroupRuleDescriptionsIngress", {})
    .n("EC2Client", "UpdateSecurityGroupRuleDescriptionsIngressCommand")
    .sc(UpdateSecurityGroupRuleDescriptionsIngress$)
    .build() {
}
