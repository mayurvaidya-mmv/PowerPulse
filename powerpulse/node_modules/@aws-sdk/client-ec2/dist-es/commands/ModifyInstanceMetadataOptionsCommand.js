import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceMetadataOptions$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyInstanceMetadataOptionsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyInstanceMetadataOptions", {})
    .n("EC2Client", "ModifyInstanceMetadataOptionsCommand")
    .sc(ModifyInstanceMetadataOptions$)
    .build() {
}
