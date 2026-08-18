import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVerifiedAccessGroup$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVerifiedAccessGroupCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVerifiedAccessGroup", {})
    .n("EC2Client", "ModifyVerifiedAccessGroupCommand")
    .sc(ModifyVerifiedAccessGroup$)
    .build() {
}
