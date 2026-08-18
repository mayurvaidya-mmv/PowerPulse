import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateRouteTable$ } from "../schemas/schemas_0";
export { $Command };
export class AssociateRouteTableCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssociateRouteTable", {})
    .n("EC2Client", "AssociateRouteTableCommand")
    .sc(AssociateRouteTable$)
    .build() {
}
