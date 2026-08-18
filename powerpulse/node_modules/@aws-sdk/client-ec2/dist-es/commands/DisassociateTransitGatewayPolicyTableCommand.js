import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateTransitGatewayPolicyTable$ } from "../schemas/schemas_0";
export { $Command };
export class DisassociateTransitGatewayPolicyTableCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisassociateTransitGatewayPolicyTable", {})
    .n("EC2Client", "DisassociateTransitGatewayPolicyTableCommand")
    .sc(DisassociateTransitGatewayPolicyTable$)
    .build() {
}
