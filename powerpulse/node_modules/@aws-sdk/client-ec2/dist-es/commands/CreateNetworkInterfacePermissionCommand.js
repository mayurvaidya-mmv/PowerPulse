import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNetworkInterfacePermission$ } from "../schemas/schemas_0";
export { $Command };
export class CreateNetworkInterfacePermissionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateNetworkInterfacePermission", {})
    .n("EC2Client", "CreateNetworkInterfacePermissionCommand")
    .sc(CreateNetworkInterfacePermission$)
    .build() {
}
