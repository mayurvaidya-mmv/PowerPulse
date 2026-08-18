import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations", {})
    .n("EC2Client", "DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsCommand")
    .sc(DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations$)
    .build() {
}
