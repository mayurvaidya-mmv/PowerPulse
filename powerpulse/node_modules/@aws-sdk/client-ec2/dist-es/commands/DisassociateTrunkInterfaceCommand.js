import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateTrunkInterface$ } from "../schemas/schemas_0";
export { $Command };
export class DisassociateTrunkInterfaceCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisassociateTrunkInterface", {})
    .n("EC2Client", "DisassociateTrunkInterfaceCommand")
    .sc(DisassociateTrunkInterface$)
    .build() {
}
