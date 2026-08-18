import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInstanceConnectEndpoint$ } from "../schemas/schemas_0";
export { $Command };
export class CreateInstanceConnectEndpointCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateInstanceConnectEndpoint", {})
    .n("EC2Client", "CreateInstanceConnectEndpointCommand")
    .sc(CreateInstanceConnectEndpoint$)
    .build() {
}
