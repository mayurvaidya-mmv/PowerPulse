import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAllowedImagesSettings$ } from "../schemas/schemas_0";
export { $Command };
export class GetAllowedImagesSettingsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetAllowedImagesSettings", {})
    .n("EC2Client", "GetAllowedImagesSettingsCommand")
    .sc(GetAllowedImagesSettings$)
    .build() {
}
