import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifySubnetAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class ModifySubnetAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifySubnetAttribute", {})
    .n("EC2Client", "ModifySubnetAttributeCommand")
    .sc(ModifySubnetAttribute$)
    .build() {
}
