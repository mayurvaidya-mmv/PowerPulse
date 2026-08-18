import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVpcEndpoint$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVpcEndpointCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVpcEndpoint", {})
    .n("EC2Client", "ModifyVpcEndpointCommand")
    .sc(ModifyVpcEndpoint$)
    .build() {
}
