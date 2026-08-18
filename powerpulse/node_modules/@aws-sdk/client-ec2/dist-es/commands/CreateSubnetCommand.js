import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSubnet$ } from "../schemas/schemas_0";
export { $Command };
export class CreateSubnetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateSubnet", {})
    .n("EC2Client", "CreateSubnetCommand")
    .sc(CreateSubnet$)
    .build() {
}
