import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecurityGroupRules$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSecurityGroupRulesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSecurityGroupRules", {})
    .n("EC2Client", "DescribeSecurityGroupRulesCommand")
    .sc(DescribeSecurityGroupRules$)
    .build() {
}
