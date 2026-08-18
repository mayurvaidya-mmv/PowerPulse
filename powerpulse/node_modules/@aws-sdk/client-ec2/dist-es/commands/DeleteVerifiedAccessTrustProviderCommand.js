import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVerifiedAccessTrustProvider$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteVerifiedAccessTrustProviderCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteVerifiedAccessTrustProvider", {})
    .n("EC2Client", "DeleteVerifiedAccessTrustProviderCommand")
    .sc(DeleteVerifiedAccessTrustProvider$)
    .build() {
}
