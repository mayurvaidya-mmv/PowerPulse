import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInternetGateway$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteInternetGatewayCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteInternetGateway", {})
    .n("EC2Client", "DeleteInternetGatewayCommand")
    .sc(DeleteInternetGateway$)
    .build() {
}
