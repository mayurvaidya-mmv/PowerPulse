import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInstanceEventWindow$ } from "../schemas/schemas_0";
export { $Command };
export class CreateInstanceEventWindowCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateInstanceEventWindow", {})
    .n("EC2Client", "CreateInstanceEventWindowCommand")
    .sc(CreateInstanceEventWindow$)
    .build() {
}
