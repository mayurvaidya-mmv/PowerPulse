import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetNetworkInsightsAccessScopeAnalysisFindings$ } from "../schemas/schemas_0";
export { $Command };
export class GetNetworkInsightsAccessScopeAnalysisFindingsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetNetworkInsightsAccessScopeAnalysisFindings", {})
    .n("EC2Client", "GetNetworkInsightsAccessScopeAnalysisFindingsCommand")
    .sc(GetNetworkInsightsAccessScopeAnalysisFindings$)
    .build() {
}
