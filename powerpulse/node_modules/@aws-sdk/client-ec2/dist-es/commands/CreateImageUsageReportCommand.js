import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateImageUsageReport$ } from "../schemas/schemas_0";
export { $Command };
export class CreateImageUsageReportCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateImageUsageReport", {})
    .n("EC2Client", "CreateImageUsageReportCommand")
    .sc(CreateImageUsageReport$)
    .build() {
}
