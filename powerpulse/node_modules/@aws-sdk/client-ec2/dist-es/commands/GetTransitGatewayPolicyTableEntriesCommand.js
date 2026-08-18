import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTransitGatewayPolicyTableEntries$ } from "../schemas/schemas_0";
export { $Command };
export class GetTransitGatewayPolicyTableEntriesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetTransitGatewayPolicyTableEntries", {})
    .n("EC2Client", "GetTransitGatewayPolicyTableEntriesCommand")
    .sc(GetTransitGatewayPolicyTableEntries$)
    .build() {
}
