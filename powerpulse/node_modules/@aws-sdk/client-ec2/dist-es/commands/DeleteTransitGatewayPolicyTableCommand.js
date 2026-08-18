import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransitGatewayPolicyTable$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteTransitGatewayPolicyTableCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteTransitGatewayPolicyTable", {})
    .n("EC2Client", "DeleteTransitGatewayPolicyTableCommand")
    .sc(DeleteTransitGatewayPolicyTable$)
    .build() {
}
