import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDelegateMacVolumeOwnershipTask$ } from "../schemas/schemas_0";
export { $Command };
export class CreateDelegateMacVolumeOwnershipTaskCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateDelegateMacVolumeOwnershipTask", {})
    .n("EC2Client", "CreateDelegateMacVolumeOwnershipTaskCommand")
    .sc(CreateDelegateMacVolumeOwnershipTask$)
    .build() {
}
