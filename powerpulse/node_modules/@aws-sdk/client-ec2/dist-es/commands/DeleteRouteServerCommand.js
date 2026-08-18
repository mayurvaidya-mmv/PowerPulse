import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRouteServer$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteRouteServerCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteRouteServer", {})
    .n("EC2Client", "DeleteRouteServerCommand")
    .sc(DeleteRouteServer$)
    .build() {
}
