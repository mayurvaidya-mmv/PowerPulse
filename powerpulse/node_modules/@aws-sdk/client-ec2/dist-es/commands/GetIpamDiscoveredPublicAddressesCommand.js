import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamDiscoveredPublicAddresses$ } from "../schemas/schemas_0";
export { $Command };
export class GetIpamDiscoveredPublicAddressesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetIpamDiscoveredPublicAddresses", {})
    .n("EC2Client", "GetIpamDiscoveredPublicAddressesCommand")
    .sc(GetIpamDiscoveredPublicAddresses$)
    .build() {
}
