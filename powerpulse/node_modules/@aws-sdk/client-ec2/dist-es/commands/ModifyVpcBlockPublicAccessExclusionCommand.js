import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVpcBlockPublicAccessExclusion$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVpcBlockPublicAccessExclusionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVpcBlockPublicAccessExclusion", {})
    .n("EC2Client", "ModifyVpcBlockPublicAccessExclusionCommand")
    .sc(ModifyVpcBlockPublicAccessExclusion$)
    .build() {
}
