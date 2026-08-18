import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeprovisionIpamByoasn$ } from "../schemas/schemas_0";
export { $Command };
export class DeprovisionIpamByoasnCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeprovisionIpamByoasn", {})
    .n("EC2Client", "DeprovisionIpamByoasnCommand")
    .sc(DeprovisionIpamByoasn$)
    .build() {
}
