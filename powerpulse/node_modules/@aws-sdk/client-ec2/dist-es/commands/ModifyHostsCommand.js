import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyHosts$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyHostsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyHosts", {})
    .n("EC2Client", "ModifyHostsCommand")
    .sc(ModifyHosts$)
    .build() {
}
