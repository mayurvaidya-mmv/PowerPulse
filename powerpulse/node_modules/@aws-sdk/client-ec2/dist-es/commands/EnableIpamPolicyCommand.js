import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableIpamPolicy$ } from "../schemas/schemas_0";
export { $Command };
export class EnableIpamPolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableIpamPolicy", {})
    .n("EC2Client", "EnableIpamPolicyCommand")
    .sc(EnableIpamPolicy$)
    .build() {
}
