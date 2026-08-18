import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation$ } from "../schemas/schemas_0";
export { $Command };
export class CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation", {})
    .n("EC2Client", "CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationCommand")
    .sc(CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation$)
    .build() {
}
