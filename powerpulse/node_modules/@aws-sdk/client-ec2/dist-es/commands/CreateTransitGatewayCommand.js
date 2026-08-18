import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTransitGateway$ } from "../schemas/schemas_0";
export { $Command };
export class CreateTransitGatewayCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateTransitGateway", {})
    .n("EC2Client", "CreateTransitGatewayCommand")
    .sc(CreateTransitGateway$)
    .build() {
}
