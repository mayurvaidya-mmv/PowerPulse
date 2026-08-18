import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartNetworkInsightsAccessScopeAnalysis$ } from "../schemas/schemas_0";
export { $Command };
export class StartNetworkInsightsAccessScopeAnalysisCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "StartNetworkInsightsAccessScopeAnalysis", {})
    .n("EC2Client", "StartNetworkInsightsAccessScopeAnalysisCommand")
    .sc(StartNetworkInsightsAccessScopeAnalysis$)
    .build() {
}
