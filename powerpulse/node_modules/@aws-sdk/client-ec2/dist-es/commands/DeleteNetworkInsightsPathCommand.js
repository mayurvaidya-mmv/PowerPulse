import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkInsightsPath$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteNetworkInsightsPathCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteNetworkInsightsPath", {})
    .n("EC2Client", "DeleteNetworkInsightsPathCommand")
    .sc(DeleteNetworkInsightsPath$)
    .build() {
}
