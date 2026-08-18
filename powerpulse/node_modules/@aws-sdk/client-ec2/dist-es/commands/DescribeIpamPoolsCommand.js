import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIpamPools$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeIpamPoolsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeIpamPools", {})
    .n("EC2Client", "DescribeIpamPoolsCommand")
    .sc(DescribeIpamPools$)
    .build() {
}
