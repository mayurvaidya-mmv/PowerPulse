import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVpcTenancy$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVpcTenancyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVpcTenancy", {})
    .n("EC2Client", "ModifyVpcTenancyCommand")
    .sc(ModifyVpcTenancy$)
    .build() {
}
