import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePublicIpv4Pools$ } from "../schemas/schemas_0";
export { $Command };
export class DescribePublicIpv4PoolsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribePublicIpv4Pools", {})
    .n("EC2Client", "DescribePublicIpv4PoolsCommand")
    .sc(DescribePublicIpv4Pools$)
    .build() {
}
