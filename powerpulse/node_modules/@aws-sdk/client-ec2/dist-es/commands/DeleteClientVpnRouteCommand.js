import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteClientVpnRoute$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteClientVpnRouteCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteClientVpnRoute", {})
    .n("EC2Client", "DeleteClientVpnRouteCommand")
    .sc(DeleteClientVpnRoute$)
    .build() {
}
