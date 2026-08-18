import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableEbsEncryptionByDefault$ } from "../schemas/schemas_0";
export { $Command };
export class DisableEbsEncryptionByDefaultCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisableEbsEncryptionByDefault", {})
    .n("EC2Client", "DisableEbsEncryptionByDefaultCommand")
    .sc(DisableEbsEncryptionByDefault$)
    .build() {
}
