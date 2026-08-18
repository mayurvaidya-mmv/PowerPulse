import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyTransitGatewayPrefixListReference$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyTransitGatewayPrefixListReferenceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyTransitGatewayPrefixListReference", {})
    .n("EC2Client", "ModifyTransitGatewayPrefixListReferenceCommand")
    .sc(ModifyTransitGatewayPrefixListReference$)
    .build() {
}
