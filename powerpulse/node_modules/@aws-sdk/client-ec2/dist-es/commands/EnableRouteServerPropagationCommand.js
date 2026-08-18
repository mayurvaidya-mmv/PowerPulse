import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableRouteServerPropagation$ } from "../schemas/schemas_0";
export { $Command };
export class EnableRouteServerPropagationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableRouteServerPropagation", {})
    .n("EC2Client", "EnableRouteServerPropagationCommand")
    .sc(EnableRouteServerPropagation$)
    .build() {
}
