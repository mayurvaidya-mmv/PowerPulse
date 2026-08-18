import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableAllowedImagesSettings$ } from "../schemas/schemas_0";
export { $Command };
export class EnableAllowedImagesSettingsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "EnableAllowedImagesSettings", {})
    .n("EC2Client", "EnableAllowedImagesSettingsCommand")
    .sc(EnableAllowedImagesSettings$)
    .build() {
}
