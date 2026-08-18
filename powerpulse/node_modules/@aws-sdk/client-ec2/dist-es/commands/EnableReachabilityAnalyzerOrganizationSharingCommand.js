import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableReachabilityAnalyzerOrganizationSharing$ } from "../schemas/schemas_0";
export { $Command };
export class EnableReachabilityAnalyzerOrganizationSharingCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableReachabilityAnalyzerOrganizationSharing", {})
    .n("EC2Client", "EnableReachabilityAnalyzerOrganizationSharingCommand")
    .sc(EnableReachabilityAnalyzerOrganizationSharing$)
    .build() {
}
