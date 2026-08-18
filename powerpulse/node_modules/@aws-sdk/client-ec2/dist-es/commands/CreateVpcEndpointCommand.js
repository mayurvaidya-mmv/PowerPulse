import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpcEndpoint$ } from "../schemas/schemas_0";
export { $Command };
export class CreateVpcEndpointCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateVpcEndpoint", {})
    .n("EC2Client", "CreateVpcEndpointCommand")
    .sc(CreateVpcEndpoint$)
    .build() {
}
