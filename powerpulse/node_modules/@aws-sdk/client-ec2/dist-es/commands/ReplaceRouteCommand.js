import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceRoute$ } from "../schemas/schemas_0";
export { $Command };
export class ReplaceRouteCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ReplaceRoute", {})
    .n("EC2Client", "ReplaceRouteCommand")
    .sc(ReplaceRoute$)
    .build() {
}
