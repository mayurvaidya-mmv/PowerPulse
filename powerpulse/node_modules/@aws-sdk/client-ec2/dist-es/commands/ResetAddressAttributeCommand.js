import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetAddressAttribute$ } from "../schemas/schemas_0";
export { $Command };
export class ResetAddressAttributeCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ResetAddressAttribute", {})
    .n("EC2Client", "ResetAddressAttributeCommand")
    .sc(ResetAddressAttribute$)
    .build() {
}
