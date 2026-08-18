import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkInsightsAnalysis$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteNetworkInsightsAnalysisCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteNetworkInsightsAnalysis", {})
    .n("EC2Client", "DeleteNetworkInsightsAnalysisCommand")
    .sc(DeleteNetworkInsightsAnalysis$)
    .build() {
}
