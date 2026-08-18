import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpnConnection$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteVpnConnectionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteVpnConnection", {})
    .n("EC2Client", "DeleteVpnConnectionCommand")
    .sc(DeleteVpnConnection$)
    .build() {
}
