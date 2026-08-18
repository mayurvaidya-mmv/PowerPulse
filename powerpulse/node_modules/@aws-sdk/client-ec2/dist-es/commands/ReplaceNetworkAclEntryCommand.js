import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceNetworkAclEntry$ } from "../schemas/schemas_0";
export { $Command };
export class ReplaceNetworkAclEntryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ReplaceNetworkAclEntry", {})
    .n("EC2Client", "ReplaceNetworkAclEntryCommand")
    .sc(ReplaceNetworkAclEntry$)
    .build() {
}
