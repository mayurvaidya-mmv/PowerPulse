import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { WithdrawByoipCidr$ } from "../schemas/schemas_0";
export { $Command };
export class WithdrawByoipCidrCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "WithdrawByoipCidr", {})
    .n("EC2Client", "WithdrawByoipCidrCommand")
    .sc(WithdrawByoipCidr$)
    .build() {
}
