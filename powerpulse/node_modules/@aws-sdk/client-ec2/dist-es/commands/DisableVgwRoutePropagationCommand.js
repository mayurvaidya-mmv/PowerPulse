import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableVgwRoutePropagation$ } from "../schemas/schemas_0";
export { $Command };
export class DisableVgwRoutePropagationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisableVgwRoutePropagation", {})
    .n("EC2Client", "DisableVgwRoutePropagationCommand")
    .sc(DisableVgwRoutePropagation$)
    .build() {
}
