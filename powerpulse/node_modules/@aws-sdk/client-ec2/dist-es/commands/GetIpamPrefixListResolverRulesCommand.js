import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamPrefixListResolverRules$ } from "../schemas/schemas_0";
export { $Command };
export class GetIpamPrefixListResolverRulesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetIpamPrefixListResolverRules", {})
    .n("EC2Client", "GetIpamPrefixListResolverRulesCommand")
    .sc(GetIpamPrefixListResolverRules$)
    .build() {
}
