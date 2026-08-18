import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableVpcClassicLinkDnsSupport$ } from "../schemas/schemas_0";
export { $Command };
export class DisableVpcClassicLinkDnsSupportCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisableVpcClassicLinkDnsSupport", {})
    .n("EC2Client", "DisableVpcClassicLinkDnsSupportCommand")
    .sc(DisableVpcClassicLinkDnsSupport$)
    .build() {
}
