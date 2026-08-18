import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSubnet$ } from "../schemas/schemas_0";
export { $Command };
export class DeleteSubnetCommand extends $Command
    .classBuilder()
    .ep(commonParams)
    .m(function (Command, cs, config, o) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
})
    .s("AmazonEC2", "DeleteSubnet", {})
    .n("EC2Client", "DeleteSubnetCommand")
    .sc(DeleteSubnet$)
    .build() {
}
