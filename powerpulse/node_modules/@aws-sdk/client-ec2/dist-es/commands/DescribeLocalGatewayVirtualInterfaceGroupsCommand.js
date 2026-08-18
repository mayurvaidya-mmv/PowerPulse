import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLocalGatewayVirtualInterfaceGroups$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeLocalGatewayVirtualInterfaceGroupsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeLocalGatewayVirtualInterfaceGroups", {})
    .n("EC2Client", "DescribeLocalGatewayVirtualInterfaceGroupsCommand")
    .sc(DescribeLocalGatewayVirtualInterfaceGroups$)
    .build() {
}
