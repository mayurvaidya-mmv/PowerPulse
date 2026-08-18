import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNetworkInsightsAccessScopes$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeNetworkInsightsAccessScopesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeNetworkInsightsAccessScopes", {})
    .n("EC2Client", "DescribeNetworkInsightsAccessScopesCommand")
    .sc(DescribeNetworkInsightsAccessScopes$)
    .build() {
}
