import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetImageAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class ResetImageAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ResetImageAttribute", {})
    .n("EC2Client", "ResetImageAttributeCommand")
    .sc(ResetImageAttribute$)
    .build() {
}
