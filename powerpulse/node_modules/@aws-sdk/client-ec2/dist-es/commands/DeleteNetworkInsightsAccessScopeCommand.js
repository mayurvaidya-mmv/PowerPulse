import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkInsightsAccessScope$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteNetworkInsightsAccessScopeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteNetworkInsightsAccessScope", {})
    .n("EC2Client", "DeleteNetworkInsightsAccessScopeCommand")
    .sc(DeleteNetworkInsightsAccessScope$)
    .build() {
}
