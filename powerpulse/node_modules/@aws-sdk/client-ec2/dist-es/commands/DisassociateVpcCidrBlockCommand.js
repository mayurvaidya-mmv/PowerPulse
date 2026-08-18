import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateVpcCidrBlock$ } from "../schemas/schemas_0";
export { $Command };
export class DisassociateVpcCidrBlockCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisassociateVpcCidrBlock", {})
    .n("EC2Client", "DisassociateVpcCidrBlockCommand")
    .sc(DisassociateVpcCidrBlock$)
    .build() {
}
