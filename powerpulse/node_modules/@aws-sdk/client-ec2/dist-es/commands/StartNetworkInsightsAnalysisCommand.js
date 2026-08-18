import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartNetworkInsightsAnalysis$ } from "../schemas/schemas_0";
export { $Command };
export class StartNetworkInsightsAnalysisCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "StartNetworkInsightsAnalysis", {})
    .n("EC2Client", "StartNetworkInsightsAnalysisCommand")
    .sc(StartNetworkInsightsAnalysis$)
    .build() {
}
