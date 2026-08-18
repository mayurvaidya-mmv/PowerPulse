import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateIpamResourceDiscovery$ } from "../schemas/schemas_0";
export { $Command };
export class AssociateIpamResourceDiscoveryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssociateIpamResourceDiscovery", {})
    .n("EC2Client", "AssociateIpamResourceDiscoveryCommand")
    .sc(AssociateIpamResourceDiscovery$)
    .build() {
}
