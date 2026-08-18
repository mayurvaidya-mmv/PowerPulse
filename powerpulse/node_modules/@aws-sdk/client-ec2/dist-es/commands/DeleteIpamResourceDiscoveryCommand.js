import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIpamResourceDiscovery$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteIpamResourceDiscoveryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteIpamResourceDiscovery", {})
    .n("EC2Client", "DeleteIpamResourceDiscoveryCommand")
    .sc(DeleteIpamResourceDiscovery$)
    .build() {
}
