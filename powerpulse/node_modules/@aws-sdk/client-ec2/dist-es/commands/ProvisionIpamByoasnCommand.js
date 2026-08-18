import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ProvisionIpamByoasn$ } from "../schemas/schemas_0";
export { $Command };
export class ProvisionIpamByoasnCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ProvisionIpamByoasn", {})
    .n("EC2Client", "ProvisionIpamByoasnCommand")
    .sc(ProvisionIpamByoasn$)
    .build() {
}
