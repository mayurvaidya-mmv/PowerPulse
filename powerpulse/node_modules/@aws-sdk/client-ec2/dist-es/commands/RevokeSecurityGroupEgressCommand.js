import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeSecurityGroupEgress$ } from "../schemas/schemas_0";
export { $Command };
export class RevokeSecurityGroupEgressCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RevokeSecurityGroupEgress", {})
    .n("EC2Client", "RevokeSecurityGroupEgressCommand")
    .sc(RevokeSecurityGroupEgress$)
    .build() {
}
