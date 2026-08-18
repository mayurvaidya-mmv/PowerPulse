import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamAddressHistory$ } from "../schemas/schemas_0";
export { $Command };
export class GetIpamAddressHistoryCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetIpamAddressHistory", {})
    .n("EC2Client", "GetIpamAddressHistoryCommand")
    .sc(GetIpamAddressHistory$)
    .build() {
}
