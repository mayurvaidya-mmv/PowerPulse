import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceEventStartTime$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyInstanceEventStartTimeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyInstanceEventStartTime", {})
    .n("EC2Client", "ModifyInstanceEventStartTimeCommand")
    .sc(ModifyInstanceEventStartTime$)
    .build() {
}
