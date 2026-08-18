import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableEbsEncryptionByDefault$ } from "../schemas/schemas_0";
export { $Command };
export class EnableEbsEncryptionByDefaultCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableEbsEncryptionByDefault", {})
    .n("EC2Client", "EnableEbsEncryptionByDefaultCommand")
    .sc(EnableEbsEncryptionByDefault$)
    .build() {
}
