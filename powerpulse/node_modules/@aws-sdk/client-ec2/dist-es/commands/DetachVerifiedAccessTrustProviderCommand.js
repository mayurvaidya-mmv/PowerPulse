import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetachVerifiedAccessTrustProvider$ } from "../schemas/schemas_0";
export { $Command };
export class DetachVerifiedAccessTrustProviderCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DetachVerifiedAccessTrustProvider", {})
    .n("EC2Client", "DetachVerifiedAccessTrustProviderCommand")
    .sc(DetachVerifiedAccessTrustProvider$)
    .build() {
}
