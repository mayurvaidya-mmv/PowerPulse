import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEgressOnlyInternetGateway$ } from "../schemas/schemas_0";
export { $Command };
export class CreateEgressOnlyInternetGatewayCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateEgressOnlyInternetGateway", {})
    .n("EC2Client", "CreateEgressOnlyInternetGatewayCommand")
    .sc(CreateEgressOnlyInternetGateway$)
    .build() {
}
