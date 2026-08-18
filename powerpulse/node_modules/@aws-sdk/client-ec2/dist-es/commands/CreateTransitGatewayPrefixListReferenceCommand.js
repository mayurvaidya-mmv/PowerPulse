import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTransitGatewayPrefixListReference$ } from "../schemas/schemas_0";
export { $Command };
export class CreateTransitGatewayPrefixListReferenceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateTransitGatewayPrefixListReference", {})
    .n("EC2Client", "CreateTransitGatewayPrefixListReferenceCommand")
    .sc(CreateTransitGatewayPrefixListReference$)
    .build() {
}
