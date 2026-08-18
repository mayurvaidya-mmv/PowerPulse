import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNetworkInterface$ } from "../schemas/schemas_0";
export { $Command };
export class CreateNetworkInterfaceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateNetworkInterface", {})
    .n("EC2Client", "CreateNetworkInterfaceCommand")
    .sc(CreateNetworkInterface$)
    .build() {
}
