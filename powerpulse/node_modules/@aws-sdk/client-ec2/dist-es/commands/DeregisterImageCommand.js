import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterImage$ } from "../schemas/schemas_0";
export { $Command };
export class DeregisterImageCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeregisterImage", {})
    .n("EC2Client", "DeregisterImageCommand")
    .sc(DeregisterImage$)
    .build() {
}
