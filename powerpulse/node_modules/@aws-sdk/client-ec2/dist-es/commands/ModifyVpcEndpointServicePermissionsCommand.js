import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVpcEndpointServicePermissions$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVpcEndpointServicePermissionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVpcEndpointServicePermissions", {})
    .n("EC2Client", "ModifyVpcEndpointServicePermissionsCommand")
    .sc(ModifyVpcEndpointServicePermissions$)
    .build() {
}
