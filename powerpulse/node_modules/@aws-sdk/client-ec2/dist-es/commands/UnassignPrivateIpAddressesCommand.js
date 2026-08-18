import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UnassignPrivateIpAddresses$ } from "../schemas/schemas_0";
export { $Command };
export class UnassignPrivateIpAddressesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "UnassignPrivateIpAddresses", {})
    .n("EC2Client", "UnassignPrivateIpAddressesCommand")
    .sc(UnassignPrivateIpAddresses$)
    .build() {
}
