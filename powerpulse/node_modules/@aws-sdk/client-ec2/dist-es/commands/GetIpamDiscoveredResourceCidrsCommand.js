import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamDiscoveredResourceCidrs$ } from "../schemas/schemas_0";
export { $Command };
export class GetIpamDiscoveredResourceCidrsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetIpamDiscoveredResourceCidrs", {})
    .n("EC2Client", "GetIpamDiscoveredResourceCidrsCommand")
    .sc(GetIpamDiscoveredResourceCidrs$)
    .build() {
}
