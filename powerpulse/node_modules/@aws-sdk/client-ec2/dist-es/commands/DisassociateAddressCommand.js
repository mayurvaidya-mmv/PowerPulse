import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateAddress$ } from "../schemas/schemas_0";
export { $Command };
export class DisassociateAddressCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisassociateAddress", {})
    .n("EC2Client", "DisassociateAddressCommand")
    .sc(DisassociateAddress$)
    .build() {
}
