import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLocalGatewayRouteTableVpcAssociation$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteLocalGatewayRouteTableVpcAssociationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteLocalGatewayRouteTableVpcAssociation", {})
    .n("EC2Client", "DeleteLocalGatewayRouteTableVpcAssociationCommand")
    .sc(DeleteLocalGatewayRouteTableVpcAssociation$)
    .build() {
}
