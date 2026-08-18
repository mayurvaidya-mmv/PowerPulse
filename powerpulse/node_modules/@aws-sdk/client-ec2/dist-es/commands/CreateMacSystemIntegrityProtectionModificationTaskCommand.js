import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMacSystemIntegrityProtectionModificationTask$ } from "../schemas/schemas_0";
export { $Command };
export class CreateMacSystemIntegrityProtectionModificationTaskCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateMacSystemIntegrityProtectionModificationTask", {})
    .n("EC2Client", "CreateMacSystemIntegrityProtectionModificationTaskCommand")
    .sc(CreateMacSystemIntegrityProtectionModificationTask$)
    .build() {
}
