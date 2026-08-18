import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdvertiseByoipCidr$ } from "../schemas/schemas_0";
export { $Command };
export class AdvertiseByoipCidrCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AdvertiseByoipCidr", {})
    .n("EC2Client", "AdvertiseByoipCidrCommand")
    .sc(AdvertiseByoipCidr$)
    .build() {
}
