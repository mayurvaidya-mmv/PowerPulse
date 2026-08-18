import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { BundleInstance$ } from "../schemas/schemas_0";
export { $Command };
export class BundleInstanceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "BundleInstance", {})
    .n("EC2Client", "BundleInstanceCommand")
    .sc(BundleInstance$)
    .build() {
}
