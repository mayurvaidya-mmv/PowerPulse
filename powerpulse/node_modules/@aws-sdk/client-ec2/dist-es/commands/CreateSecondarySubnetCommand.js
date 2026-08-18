import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSecondarySubnet$ } from "../schemas/schemas_0";
export { $Command };
export class CreateSecondarySubnetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateSecondarySubnet", {})
    .n("EC2Client", "CreateSecondarySubnetCommand")
    .sc(CreateSecondarySubnet$)
    .build() {
}
