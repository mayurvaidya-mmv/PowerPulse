import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateSecurityGroupVpc$ } from "../schemas/schemas_0";
export { $Command };
export class AssociateSecurityGroupVpcCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssociateSecurityGroupVpc", {})
    .n("EC2Client", "AssociateSecurityGroupVpcCommand")
    .sc(AssociateSecurityGroupVpc$)
    .build() {
}
