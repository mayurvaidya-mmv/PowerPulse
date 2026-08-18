import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstancePlacement$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyInstancePlacementCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyInstancePlacement", {})
    .n("EC2Client", "ModifyInstancePlacementCommand")
    .sc(ModifyInstancePlacement$)
    .build() {
}
