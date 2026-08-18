import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ProvisionByoipCidr$ } from "../schemas/schemas_0";
export { $Command };
export class ProvisionByoipCidrCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ProvisionByoipCidr", {})
    .n("EC2Client", "ProvisionByoipCidrCommand")
    .sc(ProvisionByoipCidr$)
    .build() {
}
