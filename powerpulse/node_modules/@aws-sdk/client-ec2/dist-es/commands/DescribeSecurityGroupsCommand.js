import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecurityGroups$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSecurityGroupsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSecurityGroups", {})
    .n("EC2Client", "DescribeSecurityGroupsCommand")
    .sc(DescribeSecurityGroups$)
    .build() {
}
