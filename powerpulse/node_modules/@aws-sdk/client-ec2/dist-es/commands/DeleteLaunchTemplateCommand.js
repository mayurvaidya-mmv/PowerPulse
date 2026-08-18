import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLaunchTemplate$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteLaunchTemplateCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteLaunchTemplate", {})
    .n("EC2Client", "DeleteLaunchTemplateCommand")
    .sc(DeleteLaunchTemplate$)
    .build() {
}
