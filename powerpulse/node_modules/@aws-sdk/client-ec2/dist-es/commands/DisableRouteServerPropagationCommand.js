import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableRouteServerPropagation$ } from "../schemas/schemas_0";
export { $Command };
export class DisableRouteServerPropagationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisableRouteServerPropagation", {})
    .n("EC2Client", "DisableRouteServerPropagationCommand")
    .sc(DisableRouteServerPropagation$)
    .build() {
}
