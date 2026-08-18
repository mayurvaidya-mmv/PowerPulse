import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AllocateAddress$ } from "../schemas/schemas_0";
export { $Command };
export class AllocateAddressCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "AllocateAddress", {})
    .n("EC2Client", "AllocateAddressCommand")
    .sc(AllocateAddress$)
    .build() {
}
