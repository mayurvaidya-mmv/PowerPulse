import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNetworkInterfacePermissions$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeNetworkInterfacePermissionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeNetworkInterfacePermissions", {})
    .n("EC2Client", "DescribeNetworkInterfacePermissionsCommand")
    .sc(DescribeNetworkInterfacePermissions$)
    .build() {
}
