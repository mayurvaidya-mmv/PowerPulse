import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLaunchTemplateVersions$ } from "../schemas/schemas_0";
export { $Command };
export class DescribeLaunchTemplateVersionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DescribeLaunchTemplateVersions", {})
    .n("EC2Client", "DescribeLaunchTemplateVersionsCommand")
    .sc(DescribeLaunchTemplateVersions$)
    .build() {
}
