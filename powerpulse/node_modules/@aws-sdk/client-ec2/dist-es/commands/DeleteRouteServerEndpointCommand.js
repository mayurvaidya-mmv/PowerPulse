import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRouteServerEndpoint$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteRouteServerEndpointCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteRouteServerEndpoint", {})
    .n("EC2Client", "DeleteRouteServerEndpointCommand")
    .sc(DeleteRouteServerEndpoint$)
    .build() {
}
