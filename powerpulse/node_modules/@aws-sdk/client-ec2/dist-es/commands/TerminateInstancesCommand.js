import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { TerminateInstances$ } from "../schemas/schemas_0";
export { $Command };
export class TerminateInstancesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "TerminateInstances", {})
    .n("EC2Client", "TerminateInstancesCommand")
    .sc(TerminateInstances$)
    .build() {
}
