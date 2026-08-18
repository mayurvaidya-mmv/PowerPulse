import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableVpcClassicLink$ } from "../schemas/schemas_0";
export { $Command };
export class DisableVpcClassicLinkCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisableVpcClassicLink", {})
    .n("EC2Client", "DisableVpcClassicLinkCommand")
    .sc(DisableVpcClassicLink$)
    .build() {
}
