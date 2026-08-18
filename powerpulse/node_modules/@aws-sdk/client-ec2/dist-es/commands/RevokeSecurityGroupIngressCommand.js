import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeSecurityGroupIngress$ } from "../schemas/schemas_0";
export { $Command };
export class RevokeSecurityGroupIngressCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RevokeSecurityGroupIngress", {})
    .n("EC2Client", "RevokeSecurityGroupIngressCommand")
    .sc(RevokeSecurityGroupIngress$)
    .build() {
}
