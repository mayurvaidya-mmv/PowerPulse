import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableVpcClassicLinkDnsSupport$ } from "../schemas/schemas_0";
export { $Command };
export class EnableVpcClassicLinkDnsSupportCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableVpcClassicLinkDnsSupport", {})
    .n("EC2Client", "EnableVpcClassicLinkDnsSupportCommand")
    .sc(EnableVpcClassicLinkDnsSupport$)
    .build() {
}
