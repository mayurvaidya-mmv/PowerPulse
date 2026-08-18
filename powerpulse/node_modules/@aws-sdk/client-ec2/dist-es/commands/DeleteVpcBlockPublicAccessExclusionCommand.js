import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpcBlockPublicAccessExclusion$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteVpcBlockPublicAccessExclusionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteVpcBlockPublicAccessExclusion", {})
    .n("EC2Client", "DeleteVpcBlockPublicAccessExclusionCommand")
    .sc(DeleteVpcBlockPublicAccessExclusion$)
    .build() {
}
