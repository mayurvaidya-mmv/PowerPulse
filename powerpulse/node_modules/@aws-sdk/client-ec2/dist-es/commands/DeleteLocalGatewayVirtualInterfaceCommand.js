import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLocalGatewayVirtualInterface$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteLocalGatewayVirtualInterfaceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteLocalGatewayVirtualInterface", {})
    .n("EC2Client", "DeleteLocalGatewayVirtualInterfaceCommand")
    .sc(DeleteLocalGatewayVirtualInterface$)
    .build() {
}
