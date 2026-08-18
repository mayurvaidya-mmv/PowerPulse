import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetInstanceMetadataDefaults$ } from "../schemas/schemas_0";
export { $Command };
export class GetInstanceMetadataDefaultsCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetInstanceMetadataDefaults", {})
    .n("EC2Client", "GetInstanceMetadataDefaultsCommand")
    .sc(GetInstanceMetadataDefaults$)
    .build() {
}
