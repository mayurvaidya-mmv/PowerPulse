import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReplaceRootVolumeTask$ } from "../schemas/schemas_0";
export { $Command };
export class CreateReplaceRootVolumeTaskCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateReplaceRootVolumeTask", {})
    .n("EC2Client", "CreateReplaceRootVolumeTaskCommand")
    .sc(CreateReplaceRootVolumeTask$)
    .build() {
}
