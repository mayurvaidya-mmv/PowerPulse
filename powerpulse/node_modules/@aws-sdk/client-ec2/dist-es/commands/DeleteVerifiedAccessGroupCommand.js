import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVerifiedAccessGroup$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteVerifiedAccessGroupCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteVerifiedAccessGroup", {})
    .n("EC2Client", "DeleteVerifiedAccessGroupCommand")
    .sc(DeleteVerifiedAccessGroup$)
    .build() {
}
