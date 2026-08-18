import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartVpcEndpointServicePrivateDnsVerification$ } from "../schemas/schemas_0";
export { $Command };
export class StartVpcEndpointServicePrivateDnsVerificationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "StartVpcEndpointServicePrivateDnsVerification", {})
    .n("EC2Client", "StartVpcEndpointServicePrivateDnsVerificationCommand")
    .sc(StartVpcEndpointServicePrivateDnsVerification$)
    .build() {
}
