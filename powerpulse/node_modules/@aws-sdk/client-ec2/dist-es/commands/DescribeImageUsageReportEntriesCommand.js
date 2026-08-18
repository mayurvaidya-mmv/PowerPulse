import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImageUsageReportEntries$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeImageUsageReportEntriesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeImageUsageReportEntries", {})
    .n("EC2Client", "DescribeImageUsageReportEntriesCommand")
    .sc(DescribeImageUsageReportEntries$)
    .build() {
}
