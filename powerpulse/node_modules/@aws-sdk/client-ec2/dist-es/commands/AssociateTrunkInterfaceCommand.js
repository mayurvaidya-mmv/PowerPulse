import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateTrunkInterface$ } from "../schemas/schemas_0";
export { $Command };
export class AssociateTrunkInterfaceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssociateTrunkInterface", {})
    .n("EC2Client", "AssociateTrunkInterfaceCommand")
    .sc(AssociateTrunkInterface$)
    .build() {
}
