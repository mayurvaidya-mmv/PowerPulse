import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIpamPrefixListResolverTarget$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteIpamPrefixListResolverTargetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteIpamPrefixListResolverTarget", {})
    .n("EC2Client", "DeleteIpamPrefixListResolverTargetCommand")
    .sc(DeleteIpamPrefixListResolverTarget$)
    .build() {
}
