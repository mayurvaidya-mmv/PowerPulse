import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIpamResourceDiscoveries$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeIpamResourceDiscoveriesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeIpamResourceDiscoveries", {})
    .n("EC2Client", "DescribeIpamResourceDiscoveriesCommand")
    .sc(DescribeIpamResourceDiscoveries$)
    .build() {
}
