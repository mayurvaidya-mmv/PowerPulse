import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableImageBlockPublicAccess$ } from "../schemas/schemas_0";
export { $Command };
export class EnableImageBlockPublicAccessCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableImageBlockPublicAccess", {})
    .n("EC2Client", "EnableImageBlockPublicAccessCommand")
    .sc(EnableImageBlockPublicAccess$)
    .build() {
}
