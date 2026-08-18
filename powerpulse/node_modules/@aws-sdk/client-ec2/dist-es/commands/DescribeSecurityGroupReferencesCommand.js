import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecurityGroupReferences$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeSecurityGroupReferencesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeSecurityGroupReferences", {})
    .n("EC2Client", "DescribeSecurityGroupReferencesCommand")
    .sc(DescribeSecurityGroupReferences$)
    .build() {
}
