import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReplaceImageCriteriaInAllowedImagesSettings$ } from "../schemas/schemas_0";
export { $Command };
export class ReplaceImageCriteriaInAllowedImagesSettingsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ReplaceImageCriteriaInAllowedImagesSettings", {})
    .n("EC2Client", "ReplaceImageCriteriaInAllowedImagesSettingsCommand")
    .sc(ReplaceImageCriteriaInAllowedImagesSettings$)
    .build() {
}
