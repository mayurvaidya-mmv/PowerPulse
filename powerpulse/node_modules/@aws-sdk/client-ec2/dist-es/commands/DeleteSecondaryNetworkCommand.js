import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSecondaryNetwork$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteSecondaryNetworkCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteSecondaryNetwork", {})
    .n("EC2Client", "DeleteSecondaryNetworkCommand")
    .sc(DeleteSecondaryNetwork$)
    .build() {
}
