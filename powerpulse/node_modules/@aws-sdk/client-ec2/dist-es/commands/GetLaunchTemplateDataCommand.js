import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLaunchTemplateData$ } from "../schemas/schemas_0";
export { $Command };
export class GetLaunchTemplateDataCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetLaunchTemplateData", {})
    .n("EC2Client", "GetLaunchTemplateDataCommand")
    .sc(GetLaunchTemplateData$)
    .build() {
}
