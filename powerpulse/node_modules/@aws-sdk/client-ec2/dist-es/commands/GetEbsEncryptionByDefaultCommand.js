import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEbsEncryptionByDefault$ } from "../schemas/schemas_0";
export { $Command };
export class GetEbsEncryptionByDefaultCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetEbsEncryptionByDefault", {})
    .n("EC2Client", "GetEbsEncryptionByDefaultCommand")
    .sc(GetEbsEncryptionByDefault$)
    .build() {
}
