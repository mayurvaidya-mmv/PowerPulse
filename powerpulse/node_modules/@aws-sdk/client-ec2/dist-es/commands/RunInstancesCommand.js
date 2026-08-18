import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RunInstances$ } from "../schemas/schemas_0";
export { $Command };
export class RunInstancesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RunInstances", {})
    .n("EC2Client", "RunInstancesCommand")
    .sc(RunInstances$)
    .build() {
}
