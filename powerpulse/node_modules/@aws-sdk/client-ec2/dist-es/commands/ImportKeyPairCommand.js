import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ImportKeyPair$ } from "../schemas/schemas_0";
export { $Command };
export class ImportKeyPairCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ImportKeyPair", {})
    .n("EC2Client", "ImportKeyPairCommand")
    .sc(ImportKeyPair$)
    .build() {
}
