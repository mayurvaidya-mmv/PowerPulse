import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIpamResourceCidr$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyIpamResourceCidrCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyIpamResourceCidr", {})
    .n("EC2Client", "ModifyIpamResourceCidrCommand")
    .sc(ModifyIpamResourceCidr$)
    .build() {
}
