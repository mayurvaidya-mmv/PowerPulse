import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVerifiedAccessInstanceLoggingConfiguration$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyVerifiedAccessInstanceLoggingConfigurationCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyVerifiedAccessInstanceLoggingConfiguration", {})
    .n("EC2Client", "ModifyVerifiedAccessInstanceLoggingConfigurationCommand")
    .sc(ModifyVerifiedAccessInstanceLoggingConfiguration$)
    .build() {
}
