import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceRouteTableAssociation$ } from "../schemas/schemas_0";
export { $Command };
export class ReplaceRouteTableAssociationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ReplaceRouteTableAssociation", {})
    .n("EC2Client", "ReplaceRouteTableAssociationCommand")
    .sc(ReplaceRouteTableAssociation$)
    .build() {
}
