import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AuthorizeSecurityGroupEgress$ } from "../schemas/schemas_0";
export { $Command };
export class AuthorizeSecurityGroupEgressCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AuthorizeSecurityGroupEgress", {})
    .n("EC2Client", "AuthorizeSecurityGroupEgressCommand")
    .sc(AuthorizeSecurityGroupEgress$)
    .build() {
}
