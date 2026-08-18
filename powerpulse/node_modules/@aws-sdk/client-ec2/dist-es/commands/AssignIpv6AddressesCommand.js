import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssignIpv6Addresses$ } from "../schemas/schemas_0";
export { $Command };
export class AssignIpv6AddressesCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AssignIpv6Addresses", {})
    .n("EC2Client", "AssignIpv6AddressesCommand")
    .sc(AssignIpv6Addresses$)
    .build() {
}
