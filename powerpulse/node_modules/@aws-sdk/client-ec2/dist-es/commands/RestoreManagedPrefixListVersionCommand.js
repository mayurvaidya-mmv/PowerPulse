import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreManagedPrefixListVersion$ } from "../schemas/schemas_0";
export { $Command };
export class RestoreManagedPrefixListVersionCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "RestoreManagedPrefixListVersion", {})
    .n("EC2Client", "RestoreManagedPrefixListVersionCommand")
    .sc(RestoreManagedPrefixListVersion$)
    .build() {
}
