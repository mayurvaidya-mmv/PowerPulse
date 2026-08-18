import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateRouteServer$ } from "../schemas/schemas_0";
export { $Command };
export class AssociateRouteServerCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssociateRouteServer", {})
    .n("EC2Client", "AssociateRouteServerCommand")
    .sc(AssociateRouteServer$)
    .build() {
}
