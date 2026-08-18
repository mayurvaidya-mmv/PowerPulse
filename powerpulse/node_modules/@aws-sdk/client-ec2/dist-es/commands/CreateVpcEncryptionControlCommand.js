import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpcEncryptionControl$ } from "../schemas/schemas_0";
export { $Command };
export class CreateVpcEncryptionControlCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "CreateVpcEncryptionControl", {})
    .n("EC2Client", "CreateVpcEncryptionControlCommand")
    .sc(CreateVpcEncryptionControl$)
    .build() {
}
