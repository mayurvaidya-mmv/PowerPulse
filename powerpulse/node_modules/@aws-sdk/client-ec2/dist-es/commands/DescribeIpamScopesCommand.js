import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIpamScopes$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeIpamScopesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeIpamScopes", {})
    .n("EC2Client", "DescribeIpamScopesCommand")
    .sc(DescribeIpamScopes$)
    .build() {
}
