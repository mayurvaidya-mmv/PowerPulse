import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCoipCidr$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteCoipCidrCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteCoipCidr", {})
    .n("EC2Client", "DeleteCoipCidrCommand")
    .sc(DeleteCoipCidr$)
    .build() {
}
