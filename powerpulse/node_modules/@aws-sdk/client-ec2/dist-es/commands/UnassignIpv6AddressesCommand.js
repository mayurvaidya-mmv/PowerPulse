import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UnassignIpv6Addresses$ } from "../schemas/schemas_0";
export { $Command };
export class UnassignIpv6AddressesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "UnassignIpv6Addresses", {})
    .n("EC2Client", "UnassignIpv6AddressesCommand")
    .sc(UnassignIpv6Addresses$)
    .build() {
}
