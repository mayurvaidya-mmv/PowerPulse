import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNetworkInsightsAccessScope$ } from "../schemas/schemas_0";
export { $Command };
export class CreateNetworkInsightsAccessScopeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateNetworkInsightsAccessScope", {})
    .n("EC2Client", "CreateNetworkInsightsAccessScopeCommand")
    .sc(CreateNetworkInsightsAccessScope$)
    .build() {
}
