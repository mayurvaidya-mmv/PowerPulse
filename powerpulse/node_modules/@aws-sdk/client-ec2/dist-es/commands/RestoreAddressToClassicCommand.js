import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreAddressToClassic$ } from "../schemas/schemas_0";
export { $Command };
export class RestoreAddressToClassicCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RestoreAddressToClassic", {})
    .n("EC2Client", "RestoreAddressToClassicCommand")
    .sc(RestoreAddressToClassic$)
    .build() {
}
