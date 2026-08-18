import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIpamPool$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyIpamPoolCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyIpamPool", {})
    .n("EC2Client", "ModifyIpamPoolCommand")
    .sc(ModifyIpamPool$)
    .build() {
}
