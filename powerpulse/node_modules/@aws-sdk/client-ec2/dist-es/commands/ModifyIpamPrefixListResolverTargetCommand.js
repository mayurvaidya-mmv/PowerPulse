import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIpamPrefixListResolverTarget$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyIpamPrefixListResolverTargetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyIpamPrefixListResolverTarget", {})
    .n("EC2Client", "ModifyIpamPrefixListResolverTargetCommand")
    .sc(ModifyIpamPrefixListResolverTarget$)
    .build() {
}
