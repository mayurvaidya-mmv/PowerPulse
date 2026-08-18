import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchTransitGatewayMulticastGroups$ } from "../schemas/schemas_0";
export { $Command };
export class SearchTransitGatewayMulticastGroupsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "SearchTransitGatewayMulticastGroups", {})
    .n("EC2Client", "SearchTransitGatewayMulticastGroupsCommand")
    .sc(SearchTransitGatewayMulticastGroups$)
    .build() {
}
