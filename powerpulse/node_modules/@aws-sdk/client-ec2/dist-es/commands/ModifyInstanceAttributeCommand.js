import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyInstanceAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyInstanceAttribute", {})
    .n("EC2Client", "ModifyInstanceAttributeCommand")
    .sc(ModifyInstanceAttribute$)
    .build() {
}
