import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelDeclarativePoliciesReport$ } from "../schemas/schemas_0";
export { $Command };
export class CancelDeclarativePoliciesReportCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CancelDeclarativePoliciesReport", {})
    .n("EC2Client", "CancelDeclarativePoliciesReportCommand")
    .sc(CancelDeclarativePoliciesReport$)
    .build() {
}
