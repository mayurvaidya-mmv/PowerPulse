import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateSubnetCidrBlock$ } from "../schemas/schemas_0";
export { $Command };
export class DisassociateSubnetCidrBlockCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisassociateSubnetCidrBlock", {})
    .n("EC2Client", "DisassociateSubnetCidrBlockCommand")
    .sc(DisassociateSubnetCidrBlock$)
    .build() {
}
