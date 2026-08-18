import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RunScheduledInstances$ } from "../schemas/schemas_0";
export { $Command };
export class RunScheduledInstancesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RunScheduledInstances", {})
    .n("EC2Client", "RunScheduledInstancesCommand")
    .sc(RunScheduledInstances$)
    .build() {
}
