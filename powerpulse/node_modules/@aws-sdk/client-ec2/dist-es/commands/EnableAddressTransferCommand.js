import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableAddressTransfer$ } from "../schemas/schemas_0";
export { $Command };
export class EnableAddressTransferCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableAddressTransfer", {})
    .n("EC2Client", "EnableAddressTransferCommand")
    .sc(EnableAddressTransfer$)
    .build() {
}
