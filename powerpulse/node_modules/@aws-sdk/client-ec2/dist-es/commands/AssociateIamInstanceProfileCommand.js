import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateIamInstanceProfile$ } from "../schemas/schemas_0";
export { $Command };
export class AssociateIamInstanceProfileCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssociateIamInstanceProfile", {})
    .n("EC2Client", "AssociateIamInstanceProfileCommand")
    .sc(AssociateIamInstanceProfile$)
    .build() {
}
