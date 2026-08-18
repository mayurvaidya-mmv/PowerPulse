import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableIpamPolicy$ } from "../schemas/schemas_0";
export { $Command };
export class DisableIpamPolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisableIpamPolicy", {})
    .n("EC2Client", "DisableIpamPolicyCommand")
    .sc(DisableIpamPolicy$)
    .build() {
}
