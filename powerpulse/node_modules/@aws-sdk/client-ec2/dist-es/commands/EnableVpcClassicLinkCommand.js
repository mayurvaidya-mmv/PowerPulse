import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableVpcClassicLink$ } from "../schemas/schemas_0";
export { $Command };
export class EnableVpcClassicLinkCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableVpcClassicLink", {})
    .n("EC2Client", "EnableVpcClassicLinkCommand")
    .sc(EnableVpcClassicLink$)
    .build() {
}
