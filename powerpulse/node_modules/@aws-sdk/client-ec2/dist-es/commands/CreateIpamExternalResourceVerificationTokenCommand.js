import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIpamExternalResourceVerificationToken$ } from "../schemas/schemas_0";
export { $Command };
export class CreateIpamExternalResourceVerificationTokenCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateIpamExternalResourceVerificationToken", {})
    .n("EC2Client", "CreateIpamExternalResourceVerificationTokenCommand")
    .sc(CreateIpamExternalResourceVerificationToken$)
    .build() {
}
