import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableImageDeregistrationProtection$ } from "../schemas/schemas_0";
export { $Command };
export class EnableImageDeregistrationProtectionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableImageDeregistrationProtection", {})
    .n("EC2Client", "EnableImageDeregistrationProtectionCommand")
    .sc(EnableImageDeregistrationProtection$)
    .build() {
}
