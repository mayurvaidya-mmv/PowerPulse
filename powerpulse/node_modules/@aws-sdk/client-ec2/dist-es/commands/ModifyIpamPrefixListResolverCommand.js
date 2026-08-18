import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIpamPrefixListResolver$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyIpamPrefixListResolverCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyIpamPrefixListResolver", {})
    .n("EC2Client", "ModifyIpamPrefixListResolverCommand")
    .sc(ModifyIpamPrefixListResolver$)
    .build() {
}
