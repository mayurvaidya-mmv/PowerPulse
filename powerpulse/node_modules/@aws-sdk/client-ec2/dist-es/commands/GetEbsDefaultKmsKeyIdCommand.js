import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetEbsDefaultKmsKeyId$ } from "../schemas/schemas_0";
export { $Command };
export class GetEbsDefaultKmsKeyIdCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "GetEbsDefaultKmsKeyId", {})
    .n("EC2Client", "GetEbsDefaultKmsKeyIdCommand")
    .sc(GetEbsDefaultKmsKeyId$)
    .build() {
}
