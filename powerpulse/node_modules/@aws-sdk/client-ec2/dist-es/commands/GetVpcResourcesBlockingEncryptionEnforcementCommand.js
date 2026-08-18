import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVpcResourcesBlockingEncryptionEnforcement$ } from "../schemas/schemas_0";
export { $Command };
export class GetVpcResourcesBlockingEncryptionEnforcementCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetVpcResourcesBlockingEncryptionEnforcement", {})
    .n("EC2Client", "GetVpcResourcesBlockingEncryptionEnforcementCommand")
    .sc(GetVpcResourcesBlockingEncryptionEnforcement$)
    .build() {
}
