import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIpv6Pools$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeIpv6PoolsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeIpv6Pools", {})
    .n("EC2Client", "DescribeIpv6PoolsCommand")
    .sc(DescribeIpv6Pools$)
    .build() {
}
