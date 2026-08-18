import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyEbsDefaultKmsKeyId$ } from "../schemas/schemas_0";
export { $Command };
export class ModifyEbsDefaultKmsKeyIdCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ModifyEbsDefaultKmsKeyId", {})
    .n("EC2Client", "ModifyEbsDefaultKmsKeyIdCommand")
    .sc(ModifyEbsDefaultKmsKeyId$)
    .build() {
}
