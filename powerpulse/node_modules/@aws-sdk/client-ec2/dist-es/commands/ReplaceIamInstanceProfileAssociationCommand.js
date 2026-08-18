import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceIamInstanceProfileAssociation$ } from "../schemas/schemas_0";
export { $Command };
export class ReplaceIamInstanceProfileAssociationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ReplaceIamInstanceProfileAssociation", {})
    .n("EC2Client", "ReplaceIamInstanceProfileAssociationCommand")
    .sc(ReplaceIamInstanceProfileAssociation$)
    .build() {
}
