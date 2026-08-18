import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEnabledIpamPolicy$ } from "../schemas/schemas_0";
export { $Command };
export class GetEnabledIpamPolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetEnabledIpamPolicy", {})
    .n("EC2Client", "GetEnabledIpamPolicyCommand")
    .sc(GetEnabledIpamPolicy$)
    .build() {
}
