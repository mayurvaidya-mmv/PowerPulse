import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransitGatewayMeteringPolicyEntry$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteTransitGatewayMeteringPolicyEntryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteTransitGatewayMeteringPolicyEntry", {})
    .n("EC2Client", "DeleteTransitGatewayMeteringPolicyEntryCommand")
    .sc(DeleteTransitGatewayMeteringPolicyEntry$)
    .build() {
}
