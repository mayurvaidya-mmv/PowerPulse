import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNetworkAcl$ } from "../schemas/schemas_0";
export { $Command };
export class CreateNetworkAclCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateNetworkAcl", {})
    .n("EC2Client", "CreateNetworkAclCommand")
    .sc(CreateNetworkAcl$)
    .build() {
}
