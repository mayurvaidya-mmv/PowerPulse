import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInstanceConnectEndpoint$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteInstanceConnectEndpointCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteInstanceConnectEndpoint", {})
    .n("EC2Client", "DeleteInstanceConnectEndpointCommand")
    .sc(DeleteInstanceConnectEndpoint$)
    .build() {
}
