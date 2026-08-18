import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetEbsDefaultKmsKeyId$ } from "../schemas/schemas_0";
export { $Command };
export class ResetEbsDefaultKmsKeyIdCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "ResetEbsDefaultKmsKeyId", {})
    .n("EC2Client", "ResetEbsDefaultKmsKeyIdCommand")
    .sc(ResetEbsDefaultKmsKeyId$)
    .build() {
}
