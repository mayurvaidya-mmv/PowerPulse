import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEgressOnlyInternetGateway$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteEgressOnlyInternetGatewayCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteEgressOnlyInternetGateway", {})
    .n("EC2Client", "DeleteEgressOnlyInternetGatewayCommand")
    .sc(DeleteEgressOnlyInternetGateway$)
    .build() {
}
