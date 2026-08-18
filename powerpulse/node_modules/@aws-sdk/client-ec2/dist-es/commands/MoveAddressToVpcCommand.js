import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { MoveAddressToVpc$ } from "../schemas/schemas_0";
export { $Command };
export class MoveAddressToVpcCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "MoveAddressToVpc", {})
    .n("EC2Client", "MoveAddressToVpcCommand")
    .sc(MoveAddressToVpc$)
    .build() {
}
