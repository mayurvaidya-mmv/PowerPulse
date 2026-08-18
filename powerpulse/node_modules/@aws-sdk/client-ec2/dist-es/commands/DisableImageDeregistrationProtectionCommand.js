import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableImageDeregistrationProtection$ } from "../schemas/schemas_0";
export { $Command };
export class DisableImageDeregistrationProtectionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisableImageDeregistrationProtection", {})
    .n("EC2Client", "DisableImageDeregistrationProtectionCommand")
    .sc(DisableImageDeregistrationProtection$)
    .build() {
}
