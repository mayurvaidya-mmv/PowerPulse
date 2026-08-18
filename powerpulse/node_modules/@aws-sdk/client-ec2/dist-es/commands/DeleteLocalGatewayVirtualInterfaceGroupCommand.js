import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLocalGatewayVirtualInterfaceGroup$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteLocalGatewayVirtualInterfaceGroupCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteLocalGatewayVirtualInterfaceGroup", {})
    .n("EC2Client", "DeleteLocalGatewayVirtualInterfaceGroupCommand")
    .sc(DeleteLocalGatewayVirtualInterfaceGroup$)
    .build() {
}
