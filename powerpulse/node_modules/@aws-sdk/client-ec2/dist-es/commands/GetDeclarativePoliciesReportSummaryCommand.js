import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeclarativePoliciesReportSummary$ } from "../schemas/schemas_0";
export { $Command };
export class GetDeclarativePoliciesReportSummaryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetDeclarativePoliciesReportSummary", {})
    .n("EC2Client", "GetDeclarativePoliciesReportSummaryCommand")
    .sc(GetDeclarativePoliciesReportSummary$)
    .build() {
}
