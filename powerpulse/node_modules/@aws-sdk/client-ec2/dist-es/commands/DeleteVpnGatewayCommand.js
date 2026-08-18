import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpnGateway$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteVpnGatewayCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteVpnGateway", {})
    .n("EC2Client", "DeleteVpnGatewayCommand")
    .sc(DeleteVpnGateway$)
    .build() {
}
