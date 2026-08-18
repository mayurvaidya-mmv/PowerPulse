import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceNetworkAclAssociation$ } from "../schemas/schemas_0";
export { $Command };
export class ReplaceNetworkAclAssociationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ReplaceNetworkAclAssociation", {})
    .n("EC2Client", "ReplaceNetworkAclAssociationCommand")
    .sc(ReplaceNetworkAclAssociation$)
    .build() {
}
