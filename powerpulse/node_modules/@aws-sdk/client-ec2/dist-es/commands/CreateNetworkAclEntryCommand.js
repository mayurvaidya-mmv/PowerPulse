import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNetworkAclEntry$ } from "../schemas/schemas_0";
export { $Command };
export class CreateNetworkAclEntryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateNetworkAclEntry", {})
    .n("EC2Client", "CreateNetworkAclEntryCommand")
    .sc(CreateNetworkAclEntry$)
    .build() {
}
