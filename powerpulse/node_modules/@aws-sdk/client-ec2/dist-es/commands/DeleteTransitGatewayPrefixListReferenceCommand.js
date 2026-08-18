import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransitGatewayPrefixListReference$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteTransitGatewayPrefixListReferenceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteTransitGatewayPrefixListReference", {})
    .n("EC2Client", "DeleteTransitGatewayPrefixListReferenceCommand")
    .sc(DeleteTransitGatewayPrefixListReference$)
    .build() {
}
