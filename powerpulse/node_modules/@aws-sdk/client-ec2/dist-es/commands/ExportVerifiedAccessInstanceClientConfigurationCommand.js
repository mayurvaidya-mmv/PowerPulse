import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportVerifiedAccessInstanceClientConfiguration$ } from "../schemas/schemas_0";
export { $Command };
export class ExportVerifiedAccessInstanceClientConfigurationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ExportVerifiedAccessInstanceClientConfiguration", {})
    .n("EC2Client", "ExportVerifiedAccessInstanceClientConfigurationCommand")
    .sc(ExportVerifiedAccessInstanceClientConfiguration$)
    .build() {
}
