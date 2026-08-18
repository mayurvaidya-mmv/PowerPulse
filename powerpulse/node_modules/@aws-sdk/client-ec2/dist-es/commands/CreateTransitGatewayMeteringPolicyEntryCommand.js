import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTransitGatewayMeteringPolicyEntry$ } from "../schemas/schemas_0";
export { $Command };
export class CreateTransitGatewayMeteringPolicyEntryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateTransitGatewayMeteringPolicyEntry", {})
    .n("EC2Client", "CreateTransitGatewayMeteringPolicyEntryCommand")
    .sc(CreateTransitGatewayMeteringPolicyEntry$)
    .build() {
}
