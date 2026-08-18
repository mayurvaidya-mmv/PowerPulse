import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpcEncryptionControl$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteVpcEncryptionControlCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteVpcEncryptionControl", {})
    .n("EC2Client", "DeleteVpcEncryptionControlCommand")
    .sc(DeleteVpcEncryptionControl$)
    .build() {
}
