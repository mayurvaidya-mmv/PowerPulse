import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVerifiedAccessEndpointPolicy$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVerifiedAccessEndpointPolicyCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVerifiedAccessEndpointPolicy", {})
    .n("EC2Client", "ModifyVerifiedAccessEndpointPolicyCommand")
    .sc(ModifyVerifiedAccessEndpointPolicy$)
    .build() {
}
