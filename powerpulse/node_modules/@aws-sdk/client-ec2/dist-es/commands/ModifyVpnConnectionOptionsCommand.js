import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVpnConnectionOptions$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVpnConnectionOptionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVpnConnectionOptions", {})
    .n("EC2Client", "ModifyVpnConnectionOptionsCommand")
    .sc(ModifyVpnConnectionOptions$)
    .build() {
}
