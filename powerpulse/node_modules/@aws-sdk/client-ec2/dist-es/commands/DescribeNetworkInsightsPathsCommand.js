import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNetworkInsightsPaths$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeNetworkInsightsPathsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeNetworkInsightsPaths", {})
    .n("EC2Client", "DescribeNetworkInsightsPathsCommand")
    .sc(DescribeNetworkInsightsPaths$)
    .build() {
}
