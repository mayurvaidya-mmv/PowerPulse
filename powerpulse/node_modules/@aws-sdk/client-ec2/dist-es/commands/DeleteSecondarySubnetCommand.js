import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSecondarySubnet$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteSecondarySubnetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteSecondarySubnet", {})
    .n("EC2Client", "DeleteSecondarySubnetCommand")
    .sc(DeleteSecondarySubnet$)
    .build() {
}
