import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssignPrivateNatGatewayAddress$ } from "../schemas/schemas_0";
export { $Command };
export class AssignPrivateNatGatewayAddressCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssignPrivateNatGatewayAddress", {})
    .n("EC2Client", "AssignPrivateNatGatewayAddressCommand")
    .sc(AssignPrivateNatGatewayAddress$)
    .build() {
}
