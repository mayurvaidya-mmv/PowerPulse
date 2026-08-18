import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIpamPrefixListResolverTarget$ } from "../schemas/schemas_0";
export { $Command };
export class CreateIpamPrefixListResolverTargetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateIpamPrefixListResolverTarget", {})
    .n("EC2Client", "CreateIpamPrefixListResolverTargetCommand")
    .sc(CreateIpamPrefixListResolverTarget$)
    .build() {
}
