import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptAddressTransfer$ } from "../schemas/schemas_0";
export { $Command };
export class AcceptAddressTransferCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AcceptAddressTransfer", {})
    .n("EC2Client", "AcceptAddressTransferCommand")
    .sc(AcceptAddressTransfer$)
    .build() {
}
