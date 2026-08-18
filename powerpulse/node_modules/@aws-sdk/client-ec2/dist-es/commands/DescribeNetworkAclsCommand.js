import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNetworkAcls$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeNetworkAclsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeNetworkAcls", {})
    .n("EC2Client", "DescribeNetworkAclsCommand")
    .sc(DescribeNetworkAcls$)
    .build() {
}
