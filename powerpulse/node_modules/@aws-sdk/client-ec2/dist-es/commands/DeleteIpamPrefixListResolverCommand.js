import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIpamPrefixListResolver$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteIpamPrefixListResolverCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteIpamPrefixListResolver", {})
    .n("EC2Client", "DeleteIpamPrefixListResolverCommand")
    .sc(DeleteIpamPrefixListResolver$)
    .build() {
}
