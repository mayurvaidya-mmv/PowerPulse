import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIdentityIdFormat$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyIdentityIdFormatCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyIdentityIdFormat", {})
    .n("EC2Client", "ModifyIdentityIdFormatCommand")
    .sc(ModifyIdentityIdFormat$)
    .build() {
}
