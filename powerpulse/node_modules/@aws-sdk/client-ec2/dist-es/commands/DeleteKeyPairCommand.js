import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteKeyPair$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteKeyPairCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteKeyPair", {})
    .n("EC2Client", "DeleteKeyPairCommand")
    .sc(DeleteKeyPair$)
    .build() {
}
