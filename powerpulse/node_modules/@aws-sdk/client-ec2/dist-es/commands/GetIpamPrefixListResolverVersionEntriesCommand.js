import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamPrefixListResolverVersionEntries$ } from "../schemas/schemas_0";
export { $Command };
export class GetIpamPrefixListResolverVersionEntriesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetIpamPrefixListResolverVersionEntries", {})
    .n("EC2Client", "GetIpamPrefixListResolverVersionEntriesCommand")
    .sc(GetIpamPrefixListResolverVersionEntries$)
    .build() {
}
