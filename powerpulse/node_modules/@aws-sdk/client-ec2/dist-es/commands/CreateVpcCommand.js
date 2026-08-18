import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpc$ } from "../schemas/schemas_0";
export { $Command };
export class CreateVpcCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateVpc", {})
    .n("EC2Client", "CreateVpcCommand")
    .sc(CreateVpc$)
    .build() {
}
