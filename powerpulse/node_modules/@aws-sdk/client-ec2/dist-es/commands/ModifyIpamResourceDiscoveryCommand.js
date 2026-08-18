import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIpamResourceDiscovery$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyIpamResourceDiscoveryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyIpamResourceDiscovery", {})
    .n("EC2Client", "ModifyIpamResourceDiscoveryCommand")
    .sc(ModifyIpamResourceDiscovery$)
    .build() {
}
