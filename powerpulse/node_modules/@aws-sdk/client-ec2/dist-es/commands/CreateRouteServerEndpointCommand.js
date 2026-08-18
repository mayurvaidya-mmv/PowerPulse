import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRouteServerEndpoint$ } from "../schemas/schemas_0";
export { $Command };
export class CreateRouteServerEndpointCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateRouteServerEndpoint", {})
    .n("EC2Client", "CreateRouteServerEndpointCommand")
    .sc(CreateRouteServerEndpoint$)
    .build() {
}
