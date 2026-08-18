import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyAddressAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyAddressAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyAddressAttribute", {})
    .n("EC2Client", "ModifyAddressAttributeCommand")
    .sc(ModifyAddressAttribute$)
    .build() {
}
