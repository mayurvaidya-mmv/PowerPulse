import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachVpnGateway$ } from "../schemas/schemas_0";
export { $Command };
export class AttachVpnGatewayCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AttachVpnGateway", {})
    .n("EC2Client", "AttachVpnGatewayCommand")
    .sc(AttachVpnGateway$)
    .build() {
}
