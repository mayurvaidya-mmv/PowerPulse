import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIpamPolicies$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeIpamPoliciesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeIpamPolicies", {})
    .n("EC2Client", "DescribeIpamPoliciesCommand")
    .sc(DescribeIpamPolicies$)
    .build() {
}
