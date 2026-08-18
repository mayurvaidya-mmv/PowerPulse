import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIpamExternalResourceVerificationToken$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteIpamExternalResourceVerificationTokenCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteIpamExternalResourceVerificationToken", {})
    .n("EC2Client", "DeleteIpamExternalResourceVerificationTokenCommand")
    .sc(DeleteIpamExternalResourceVerificationToken$)
    .build() {
}
