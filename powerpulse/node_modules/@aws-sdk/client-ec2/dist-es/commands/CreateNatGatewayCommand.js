import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNatGateway$ } from "../schemas/schemas_0";
export { $Command };
export class CreateNatGatewayCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateNatGateway", {})
    .n("EC2Client", "CreateNatGatewayCommand")
    .sc(CreateNatGateway$)
    .build() {
}
