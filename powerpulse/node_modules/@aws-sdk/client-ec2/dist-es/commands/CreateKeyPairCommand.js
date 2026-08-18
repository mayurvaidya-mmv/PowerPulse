import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateKeyPair$ } from "../schemas/schemas_0";
export { $Command };
export class CreateKeyPairCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateKeyPair", {})
    .n("EC2Client", "CreateKeyPairCommand")
    .sc(CreateKeyPair$)
    .build() {
}
