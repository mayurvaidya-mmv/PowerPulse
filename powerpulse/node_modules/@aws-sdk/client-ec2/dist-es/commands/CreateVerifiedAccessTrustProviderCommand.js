import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVerifiedAccessTrustProvider$ } from "../schemas/schemas_0";
export { $Command };
export class CreateVerifiedAccessTrustProviderCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateVerifiedAccessTrustProvider", {})
    .n("EC2Client", "CreateVerifiedAccessTrustProviderCommand")
    .sc(CreateVerifiedAccessTrustProvider$)
    .build() {
}
