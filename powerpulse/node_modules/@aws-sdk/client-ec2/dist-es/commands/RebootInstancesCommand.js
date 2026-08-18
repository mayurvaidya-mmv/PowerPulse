import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RebootInstances$ } from "../schemas/schemas_0";
export { $Command };
export class RebootInstancesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RebootInstances", {})
    .n("EC2Client", "RebootInstancesCommand")
    .sc(RebootInstances$)
    .build() {
}
