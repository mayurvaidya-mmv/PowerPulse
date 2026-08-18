import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteImageUsageReport$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteImageUsageReportCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteImageUsageReport", {})
    .n("EC2Client", "DeleteImageUsageReportCommand")
    .sc(DeleteImageUsageReport$)
    .build() {
}
