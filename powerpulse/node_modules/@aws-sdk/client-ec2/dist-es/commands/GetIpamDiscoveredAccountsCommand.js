import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamDiscoveredAccounts$ } from "../schemas/schemas_0";
export { $Command };
export class GetIpamDiscoveredAccountsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetIpamDiscoveredAccounts", {})
    .n("EC2Client", "GetIpamDiscoveredAccountsCommand")
    .sc(GetIpamDiscoveredAccounts$)
    .build() {
}
