import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AuthorizeSecurityGroupIngress$ } from "../schemas/schemas_0";
export { $Command };
export class AuthorizeSecurityGroupIngressCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AuthorizeSecurityGroupIngress", {})
    .n("EC2Client", "AuthorizeSecurityGroupIngressCommand")
    .sc(AuthorizeSecurityGroupIngress$)
    .build() {
}
