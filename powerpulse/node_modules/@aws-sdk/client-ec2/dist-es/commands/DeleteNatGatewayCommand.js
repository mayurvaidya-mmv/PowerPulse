import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNatGateway$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteNatGatewayCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteNatGateway", {})
    .n("EC2Client", "DeleteNatGatewayCommand")
    .sc(DeleteNatGateway$)
    .build() {
}
