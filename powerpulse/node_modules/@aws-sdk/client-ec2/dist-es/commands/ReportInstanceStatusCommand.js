import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReportInstanceStatus$ } from "../schemas/schemas_0";
export { $Command };
export class ReportInstanceStatusCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ReportInstanceStatus", {})
    .n("EC2Client", "ReportInstanceStatusCommand")
    .sc(ReportInstanceStatus$)
    .build() {
}
