import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachVerifiedAccessTrustProvider$ } from "../schemas/schemas_0";
export { $Command };
export class AttachVerifiedAccessTrustProviderCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AttachVerifiedAccessTrustProvider", {})
    .n("EC2Client", "AttachVerifiedAccessTrustProviderCommand")
    .sc(AttachVerifiedAccessTrustProvider$)
    .build() {
}
