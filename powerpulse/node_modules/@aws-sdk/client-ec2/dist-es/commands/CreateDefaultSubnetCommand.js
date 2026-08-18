import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDefaultSubnet$ } from "../schemas/schemas_0";
export { $Command };
export class CreateDefaultSubnetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateDefaultSubnet", {})
    .n("EC2Client", "CreateDefaultSubnetCommand")
    .sc(CreateDefaultSubnet$)
    .build() {
}
