import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyRouteServer$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyRouteServerCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyRouteServer", {})
    .n("EC2Client", "ModifyRouteServerCommand")
    .sc(ModifyRouteServer$)
    .build() {
}
