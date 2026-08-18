import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIpam$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyIpamCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyIpam", {})
    .n("EC2Client", "ModifyIpamCommand")
    .sc(ModifyIpam$)
    .build() {
}
