import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateIpamByoasn$ } from "../schemas/schemas_0";
export { $Command };
export class AssociateIpamByoasnCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssociateIpamByoasn", {})
    .n("EC2Client", "AssociateIpamByoasnCommand")
    .sc(AssociateIpamByoasn$)
    .build() {
}
