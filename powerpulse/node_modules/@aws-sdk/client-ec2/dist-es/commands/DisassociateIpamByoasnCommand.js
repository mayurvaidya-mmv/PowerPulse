import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateIpamByoasn$ } from "../schemas/schemas_0";
export { $Command };
export class DisassociateIpamByoasnCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DisassociateIpamByoasn", {})
    .n("EC2Client", "DisassociateIpamByoasnCommand")
    .sc(DisassociateIpamByoasn$)
    .build() {
}
