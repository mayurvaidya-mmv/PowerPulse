import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCustomerGateway$ } from "../schemas/schemas_0";
export { $Command };
export class CreateCustomerGatewayCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateCustomerGateway", {})
    .n("EC2Client", "CreateCustomerGatewayCommand")
    .sc(CreateCustomerGateway$)
    .build() {
}
