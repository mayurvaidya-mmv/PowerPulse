import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartInstances$ } from "../schemas/schemas_0";
export { $Command };
export class StartInstancesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "StartInstances", {})
    .n("EC2Client", "StartInstancesCommand")
    .sc(StartInstances$)
    .build() {
}
