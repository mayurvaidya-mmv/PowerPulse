import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyTransitGateway$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyTransitGatewayCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyTransitGateway", {})
    .n("EC2Client", "ModifyTransitGatewayCommand")
    .sc(ModifyTransitGateway$)
    .build() {
}
