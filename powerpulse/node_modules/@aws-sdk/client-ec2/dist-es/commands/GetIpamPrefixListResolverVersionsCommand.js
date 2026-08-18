import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamPrefixListResolverVersions$ } from "../schemas/schemas_0";
export { $Command };
export class GetIpamPrefixListResolverVersionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetIpamPrefixListResolverVersions", {})
    .n("EC2Client", "GetIpamPrefixListResolverVersionsCommand")
    .sc(GetIpamPrefixListResolverVersions$)
    .build() {
}
