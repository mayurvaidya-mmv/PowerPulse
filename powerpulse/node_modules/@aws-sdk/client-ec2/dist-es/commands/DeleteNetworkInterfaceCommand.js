import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkInterface$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteNetworkInterfaceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteNetworkInterface", {})
    .n("EC2Client", "DeleteNetworkInterfaceCommand")
    .sc(DeleteNetworkInterface$)
    .build() {
}
