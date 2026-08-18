import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableImageDeprecation$ } from "../schemas/schemas_0";
export { $Command };
export class EnableImageDeprecationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableImageDeprecation", {})
    .n("EC2Client", "EnableImageDeprecationCommand")
    .sc(EnableImageDeprecation$)
    .build() {
}
